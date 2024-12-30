import { NgClass, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
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
import { DevicesModel } from '../devices/devices.type';
import { DeviceUsersService } from './device-users.service';
import { DeviceUserModel, DeviceUsersModel } from './device-users.type';
import { ShareDeviceComponent } from './share-device/share-device.component';

@Component({
    selector: 'app-device-users',
    templateUrl: './device-users.component.html',
    styleUrls: ['./device-users.component.scss'],
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
export class DeviceUsersComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    displayedColumns: string[] = [
        'device',
        'device_username',
        'user',
        'action',
    ];

    pageSize: number[] = PAGE_SIZES;
    deviceUsers: DeviceUserModel[];

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
        private _deviceUsersService: DeviceUsersService,
        private _matDialog: MatDialog,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.pagination.zitadel_user_id = Number(
            this._activatedRoute.snapshot.queryParamMap.get(
                'zitadel_user_id'
            ) ?? 0
        );
        this.pagination.device_id = Number(
            this._activatedRoute.snapshot.queryParamMap.get('device_id') ?? 0
        );
        this.pagination.page = Number(
            this._activatedRoute.snapshot.queryParamMap.get('page') ?? 0
        );
        this.pagination.size = Number(
            this._activatedRoute.snapshot.queryParamMap.get('size') ??
                this.pageSize[0]
        );

        this.isLoading = true;
        this.getDeviceUsers();
    }

    getDeviceUsers(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._deviceUsersService.getDeviceUsers(this.pagination).subscribe({
                next: (res: DeviceUsersModel): void => {
                    this.deviceUsers = res.items;
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
        this.pagination.zitadel_user_id = undefined;
        this.pagination.device_id = undefined;
        this.getDeviceUsers();
    }

    queryParamHandler(): void {
        this._router
            .navigate(['.'], {
                relativeTo: this._activatedRoute,
                queryParams: {
                    zitadel_user_id: this.pagination.zitadel_user_id,
                    device_id: this.pagination.device_id,
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
        this.getDeviceUsers();
    }

    deleteConfirmation(data: DeviceUserModel): void {
        this._subscription.add(
            this._fuseConfirmationService
                .open({
                    title: 'Remove this device user',
                    message:
                        'This will remove the users from the shared device.',
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

    deleteZitadelUser(data: DeviceUserModel): void {
        this.isLoading = true;
        this.showAlert = false;

        this._subscription.add(
            this._deviceUsersService.deleteDeviceUser(data.id).subscribe({
                next: () => this.getDeviceUsers(),
                error: (err: HttpErrorResponse) =>
                    this.onFailed(
                        err.status === 500
                            ? '500: Internal Server Error'
                            : err.error
                    ),
            })
        );
    }

    openShareDeviceModal(data: DevicesModel = null): void {
        this._subscription.add(
            this._matDialog
                .open(ShareDeviceComponent, { data, disableClose: true })
                .afterClosed()
                .subscribe({
                    next: (res): void => {
                        if (res) {
                            this.getDeviceUsers();
                        }
                    },
                })
        );
    }

    viewSharedUser(id: number): void {
        this.router
            .navigate([RoutesConstants.SHARED_USERS], {
                queryParams: { device_user_id: id },
            })
            .then();
    }

    viewDeviceLogs(id: number): void {
        this.router
            .navigate([RoutesConstants.DEVICE_LOGS], {
                queryParams: { device_user_id: id },
            })
            .then();
    }

    viewAdminLogs(id: number): void {
        this.router
            .navigate([RoutesConstants.ADMIN_LOGS], {
                queryParams: { device_user_id: id },
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
