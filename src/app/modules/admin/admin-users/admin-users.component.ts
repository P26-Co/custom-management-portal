import { NgClass, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
import { Subject, Subscription, takeUntil } from 'rxjs';
import { fuseAnimations } from '../../../../@fuse/animations';
import {
    FuseAlertComponent,
    FuseAlertType,
} from '../../../../@fuse/components/alert';
import { FuseConfirmationService } from '../../../../@fuse/services/confirmation';
import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user.types';
import { PAGE_SIZES } from '../../shared/constants/others.constants';
import { RoutesConstants } from '../../shared/constants/routes.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminUsersService } from './admin-users.service';
import { AdminUserModel, AdminUsersModel } from './admin-users.type';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.scss'],
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
export class AdminUsersComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    displayedColumns: string[] = ['name', 'email', 'action'];

    pageSize: number[] = PAGE_SIZES;
    adminUsers: AdminUserModel[];
    user: User;

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
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
        private _fuseConfirmationService: FuseConfirmationService,
        private _router: Router,
        private _userService: UserService,
        private _adminUsersService: AdminUsersService,
        private _matDialog: MatDialog,
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

        // Subscribe to user changes
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: User) => {
                this.user = user;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        this.isLoading = true;
        this.getAdminUsers();
    }

    openAdminModal(data: AdminUsersModel = null): void {
        this._subscription.add(
            this._matDialog
                .open(AdminUserComponent, { data, disableClose: true })
                .afterClosed()
                .subscribe({
                    next: (res): void => {
                        if (res) {
                            this.getAdminUsers();
                        }
                    },
                })
        );
    }

    getAdminUsers(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._adminUsersService.getAdminUsers(this.pagination).subscribe({
                next: (res: AdminUsersModel): void => {
                    this.adminUsers = res.items;
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
        this.getAdminUsers();
    }

    deleteConfirmation(data: AdminUserModel): void {
        this._subscription.add(
            this._fuseConfirmationService
                .open({
                    title: 'Remove this user',
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
                        this.deleteZitadelUser(data);
                    }
                })
        );
    }

    deleteZitadelUser(data: AdminUserModel): void {
        this.isLoading = true;
        this.showAlert = false;

        this._subscription.add(
            this._adminUsersService.deleteAdminUser(data.id).subscribe({
                next: () => this.getAdminUsers(),
                error: (err: HttpErrorResponse) =>
                    this.onFailed(
                        err.status === 500
                            ? '500: Internal Server Error'
                            : err.error
                    ),
            })
        );
    }

    viewAdminLogs(id: number): void {
        this.router
            .navigate([RoutesConstants.ADMIN_LOGS], {
                queryParams: { admin_user_id: id },
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
