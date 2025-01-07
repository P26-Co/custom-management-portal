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
import { UserService } from '../../../core/user/user.service';
import { ROLE, User } from '../../../core/user/user.types';
import { PAGE_SIZES } from '../../shared/constants/others.constants';
import { RoutesConstants } from '../../shared/constants/routes.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { TaskStatusService } from '../task-status/task-status.service';
import { TASK_STATUS, TaskModel } from '../task-status/task-status.type';
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
    user: User;
    userRole = ROLE;

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
    isImportLoading: boolean = false;
    private intervalId: any;

    constructor(
        private _snackBar: MatSnackBar,
        private _activatedRoute: ActivatedRoute,
        private _fuseConfirmationService: FuseConfirmationService,
        private _router: Router,
        private _zitadelUsersService: ZitadelUsersService,
        private _taskStatusService: TaskStatusService,
        private router: Router,
        private _userService: UserService
    ) {}

    ngOnInit(): void {
        this.pagination.tenant_id =
            this._activatedRoute.snapshot.queryParamMap.get('tenant_id');
        this.pagination.page = Number(
            this._activatedRoute.snapshot.queryParamMap.get('page') ?? 0
        );
        this.pagination.size = Number(
            this._activatedRoute.snapshot.queryParamMap.get('size') ??
                this.pageSize[0]
        );

        this.isLoading = true;
        this._subscription.add(
            this._userService.user$.subscribe((user: User): void => {
                this.user = user;
            })
        );

        this.getZitadelUsers();
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

    clearSearch(): void {
        this.pagination.page = 0;
        this.pagination.length = 0;
        this.pagination.tenant_id = undefined;
        this.getZitadelUsers();
    }

    queryParamHandler(): void {
        this._router
            .navigate(['.'], {
                relativeTo: this._activatedRoute,
                queryParams: {
                    tenant_id: this.pagination.tenant_id,
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

    importZitadelUser(): void {
        this.isImportLoading = true;
        this._subscription.add(
            this._taskStatusService.importZitadelUser().subscribe({
                next: (res: TaskModel): void => {
                    this._snackBar.open('Zitadel User Import task started!');
                    this.alert = {
                        type: 'info',
                        message: res.message,
                    };
                    this.showAlert = !!res.message;

                    this.intervalId = setInterval(() => {
                        this.checkTaskStatus(res);
                    }, 5000); // 5 seconds
                },
                error: (err: HttpErrorResponse) => {
                    if (err.status === 404) {
                    }
                    this.isImportLoading = false;
                },
            })
        );
    }

    checkTaskStatus(data: TaskModel): void {
        this._subscription.add(
            this._taskStatusService.getTaskStatus(data.id).subscribe({
                next: (res: TaskModel): void => {
                    this.alert = {
                        type: 'info',
                        message: res.message,
                    };
                    this.showAlert = !!res.message;

                    if (
                        res.status !== TASK_STATUS.IN_PROGRESS &&
                        res.status !== TASK_STATUS.PENDING
                    ) {
                        clearInterval(this.intervalId);
                        this.getZitadelUsers();
                        this.isImportLoading = false;
                    }
                },
            })
        );
    }

    viewDevice(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICES], {
                queryParams: { zitadel_user_id: id },
            })
            .then();
    }

    viewDeviceUser(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICE_USERS], {
                queryParams: { zitadel_user_id: id },
            })
            .then();
    }

    viewSharedUser(id: string): void {
        this.router
            .navigate([RoutesConstants.SHARED_USERS], {
                queryParams: { zitadel_user_id: id },
            })
            .then();
    }

    viewDeviceLogs(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICE_LOGS], {
                queryParams: { zitadel_user_id: id },
            })
            .then();
    }

    viewAdminLogs(id: string): void {
        this.router
            .navigate([RoutesConstants.PORTAL_LOGS], {
                queryParams: { zitadel_user_id: id },
            })
            .then();
    }

    viewTaskStatus(): void {
        this.router
            .navigate([RoutesConstants.TASK_STATUS])
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
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
