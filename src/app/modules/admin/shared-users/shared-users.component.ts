import { NgClass, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fuseAnimations } from '../../../../@fuse/animations';
import {
    FuseAlertComponent,
    FuseAlertType,
} from '../../../../@fuse/components/alert';
import { FuseConfirmationService } from '../../../../@fuse/services/confirmation';
import { PAGE_SIZES } from '../../shared/constants/others.constants';
import { RoutesConstants } from '../../shared/constants/routes.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { SharedUsersService } from './shared-users.service';
import { SharedUserModel, SharedUsersModel } from './shared-users.type';

@Component({
    selector: 'app-shared-users',
    templateUrl: './shared-users.component.html',
    styleUrls: ['./shared-users.component.scss'],
    standalone: true,
    animations: fuseAnimations,
    imports: [
        FuseAlertComponent,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        NgIf,
        ReactiveFormsModule,
        MatButtonModule,
        NgClass,
        MatTableModule,
        FuseAlertComponent,
    ],
})
export class SharedUsersComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    displayedColumns: string[] = [
        'device',
        'device_user',
        'shared_user',
        'owner_user',
        'action',
    ];

    pageSize: number[] = PAGE_SIZES;
    devices: SharedUserModel[];

    pagination: Pagination = {
        length: 0,
        page: 0,
        size: this.pageSize[0],
    };

    alert: {
        type: FuseAlertType;
        message: string;
    } = {
        type: 'success',
        message: '',
    };
    showAlert: boolean = false;
    isLoading: boolean = false;

    constructor(
        private _snackBar: MatSnackBar,
        private _activatedRoute: ActivatedRoute,
        private _fuseConfirmationService: FuseConfirmationService,
        private _router: Router,
        private _sharedUsersService: SharedUsersService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.pagination.tenant_id =
            this._activatedRoute.snapshot.queryParamMap.get('tenant_id');
        this.pagination.zitadel_user_id =
            this._activatedRoute.snapshot.queryParamMap.get('zitadel_user_id');
        this.pagination.device_user_id =
            this._activatedRoute.snapshot.queryParamMap.get('device_user_id');
        this.pagination.page = Number(
            this._activatedRoute.snapshot.queryParamMap.get('page') ?? 0
        );
        this.pagination.size = Number(
            this._activatedRoute.snapshot.queryParamMap.get('size') ??
                this.pageSize[0]
        );

        this.isLoading = true;
        this.getSharedUsers();
    }

    getSharedUsers(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._sharedUsersService.getSharedUsers(this.pagination).subscribe({
                next: (res: SharedUsersModel): void => {
                    this.devices = res.items;
                    this.pagination.length = res.total;
                    this.isLoading = false;
                },
                error: (err: HttpErrorResponse) => {
                    if (err.status !== 404) {
                        this.onFailed(
                            err.status === 500
                                ? '500: Internal Server Error'
                                : err.error.detail
                        );
                    }
                    this.isLoading = false;
                },
            })
        );
    }

    clearSearch(): void {
        this.pagination.page = 0;
        this.pagination.length = 0;
        this.pagination.tenant_id = undefined;
        this.pagination.zitadel_user_id = undefined;
        this.pagination.device_user_id = undefined;
        this.getSharedUsers();
    }

    queryParamHandler(): void {
        this._router
            .navigate(['.'], {
                relativeTo: this._activatedRoute,
                queryParams: {
                    tenant_id: this.pagination.tenant_id,
                    zitadel_user_id: this.pagination.zitadel_user_id,
                    device_user_id: this.pagination.device_user_id,
                    page: this.pagination.page,
                    size: this.pagination.size,
                },
            })
            .then();
    }

    handlePageEvent(e: PageEvent): void {
        this.pagination.length = e.length;
        this.pagination.size = e.pageSize;
        this.pagination.page = e.pageIndex;
        this.getSharedUsers();
    }

    deleteConfirmation(data: SharedUserModel): void {
        this._subscription.add(
            this._fuseConfirmationService
                .open({
                    title: 'Remove this shared user',
                    message:
                        'Are you sure you want to remove this user permanently?',
                    icon: {
                        show: true,
                        name: 'heroicons_outline:exclamation-triangle',
                        color: 'warn',
                    },
                    actions: {
                        confirm: {
                            show: true,
                            label: 'Remove',
                            color: 'warn',
                        },
                        cancel: {
                            show: true,
                            label: 'Cancel',
                        },
                    },
                    dismissible: true,
                })
                .afterClosed()
                .subscribe((result): void => {
                    if (result === 'confirmed') {
                        this.deleteSharedUser(data);
                    }
                })
        );
    }

    deleteSharedUser(data: SharedUserModel): void {
        this.isLoading = true;
        this.showAlert = false;

        this._subscription.add(
            this._sharedUsersService.deleteShareUser(data.id).subscribe({
                next: () => {
                    this._snackBar.open('Removed successfully.!');
                    this.getSharedUsers();
                },
                error: (err: HttpErrorResponse) =>
                    this.onFailed(
                        err.status === 500
                            ? '500: Internal Server Error'
                            : err.error
                    ),
            })
        );
    }

    viewDeviceUser(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICE_USERS], {
                queryParams: { device_id: id },
            })
            .then();
    }

    viewAdminLogs(id: string): void {
        this.router
            .navigate([RoutesConstants.PORTAL_LOGS], {
                queryParams: { shared_user_id: id },
            })
            .then();
    }

    viewDeviceLogs(zitadel_user_id: string, device_user_id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICE_LOGS], {
                queryParams: { zitadel_user_id, device_user_id },
            })
            .then();
    }

    onFailed(message: string): void {
        this.alert = {
            type: 'error',
            message,
        };
        this.showAlert = true;
        this.isLoading = false;
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }
}
