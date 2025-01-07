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
import { ROLE, User } from '../../../core/user/user.types';
import { PAGE_SIZES } from '../../shared/constants/others.constants';
import { RoutesConstants } from '../../shared/constants/routes.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { TenantManagerComponent } from './tenant-manager/tenant-manager.component';
import { TenantManagersService } from './tenant-managers.service';
import {
    TenantManagerModel,
    TenantManagersModel,
} from './tenant-managers.type';

@Component({
    selector: 'app-tenant-managers',
    templateUrl: './tenant-managers.component.html',
    styleUrls: ['./tenant-managers.component.scss'],
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
export class TenantManagersComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    displayedColumns: string[] = [
        'name',
        'email',
        'role',
        'tenant_id',
        'active',
        'action',
    ];

    pageSize: number[] = PAGE_SIZES;
    tenantManagers: TenantManagerModel[];
    user: User;

    pagination: Pagination = {
        length: 0,
        page: 0,
        size: this.pageSize[0],
        role: ROLE.TENANT_MANAGER,
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
        private _adminUsersService: TenantManagersService,
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
        this.getTenantManagers();
    }

    openTenantMangerModal(data: TenantManagersModel = null): void {
        this._subscription.add(
            this._matDialog
                .open(TenantManagerComponent, { data, disableClose: true })
                .afterClosed()
                .subscribe({
                    next: (res): void => {
                        if (res) {
                            this.getTenantManagers();
                        }
                    },
                })
        );
    }

    getTenantManagers(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._adminUsersService
                .getTenantManagers(this.pagination)
                .subscribe({
                    next: (res: TenantManagersModel): void => {
                        this.tenantManagers = res.items;
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
        this.getTenantManagers();
    }

    deleteConfirmation(data: TenantManagerModel): void {
        this._subscription.add(
            this._fuseConfirmationService
                .open({
                    title: 'Disable this user',
                    message:
                        'Are you sure you want to disable this user?',
                    icon: {
                        show: true,
                        name: 'heroicons_outline:exclamation-triangle',
                        color: 'warn',
                    },
                    actions: {
                        confirm: {
                            show: true,
                            label: 'Disable',
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
                        this.deleteTenantManager(data);
                    }
                })
        );
    }

    deleteTenantManager(data: TenantManagerModel): void {
        this.isLoading = true;
        this.showAlert = false;

        this._subscription.add(
            this._adminUsersService.deleteTenantManager(data.id).subscribe({
                next: () => this.getTenantManagers(),
                error: (err: HttpErrorResponse) =>
                    this.onFailed(
                        err.status === 500
                            ? '500: Internal Server Error'
                            : err.error
                    ),
            })
        );
    }

    viewPortalLogs(id: string): void {
        this.router
            .navigate([RoutesConstants.PORTAL_LOGS], {
                queryParams: { portal_user_id: id },
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
