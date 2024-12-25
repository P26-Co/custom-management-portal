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
import { ZitadelUsersService } from './zitadel-users.service';
import { ZitadelUserModel, ZitadelUsersModel } from './zitadel-users.type';

@Component({
    selector: 'app-zitadel-users',
    templateUrl: './zitadel-users.component.html',
    styleUrls: ['./zitadel-users.component.scss'],
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
export class ZitadelUsersComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    displayedColumns: string[] = [
        'name',
        'email',
        'zitadel_user_id',
        'tenant_id',
        'action',
    ];

    pageSize: number[] = PAGE_SIZES;
    zitadelUsers: ZitadelUserModel[];

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
        private _activatedRoute: ActivatedRoute,
        private _fuseConfirmationService: FuseConfirmationService,
        private _router: Router,
        private _zitadelUsersService: ZitadelUsersService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.pagination.page = Number(
            this._activatedRoute.snapshot.queryParamMap.get('page') ?? 0
        );
        this.pagination.size = Number(
            this._activatedRoute.snapshot.queryParamMap.get('size') ??
                this.pageSize[0]
        );

        this.isLoading = true;
        this.getZitadelUsers();
    }

    viewDevice(id: number): void {
        this.router
            .navigate([RoutesConstants.DEVICES], {
                queryParams: { zitadel_user_id: id },
            })
            .then();
    }

    getZitadelUsers(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._zitadelUsersService
                .getZitadelUsers(this.pagination)
                .subscribe({
                    next: (res: ZitadelUsersModel): void => {
                        this.zitadelUsers = res.items;
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

    queryParamHandler(): void {
        this._router
            .navigate(['.'], {
                relativeTo: this._activatedRoute,
                queryParams: {
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
        this.getZitadelUsers();
    }

    deleteConfirmation(data: ZitadelUserModel): void {
        this._subscription.add(
            this._fuseConfirmationService
                .open({
                    title: 'Remove this user',
                    message:
                        'This will remove the user from the shared devices as well as from any device users owned by the user.',
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
                        this.deleteZitadelUser(data);
                    }
                })
        );
    }

    deleteZitadelUser(data: ZitadelUserModel): void {
        this.isLoading = true;
        this.showAlert = false;

        this._subscription.add(
            this._zitadelUsersService.deleteZitadelUser(data.id).subscribe({
                next: () => this.getZitadelUsers(),
                error: (err: HttpErrorResponse) =>
                    this.onFailed(
                        err.status === 500
                            ? '500: Internal Server Error'
                            : err.error
                    ),
            })
        );
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
