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
import { ZitadelTenantsService } from './zitadel-tenants.service';
import { ZitadelTenantModel, ZitadelTenantsModel } from './zitadel-tenants.type';

@Component({
    selector: 'app-zitadel-tenants',
    templateUrl: './zitadel-tenants.component.html',
    styleUrls: ['./zitadel-tenants.component.scss'],
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
export class ZitadelTenantsComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    displayedColumns: string[] = [
        'tenant_id',
        'name',
        'zitadel_tenant_id',
        'action',
    ];

    pageSize: number[] = PAGE_SIZES;
    zitadelTenants: ZitadelTenantModel[];

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
        private _zitadelTenantsService: ZitadelTenantsService,
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

        this.getZitadelTenants();
    }

    getZitadelTenants(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._zitadelTenantsService
                .getZitadelTenants(this.pagination)
                .subscribe({
                    next: (res: ZitadelTenantsModel): void => {
                        this.zitadelTenants = res.items;
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
        this.getZitadelTenants();
    }

    deleteConfirmation(data: ZitadelTenantModel): void {
        this._subscription.add(
            this._fuseConfirmationService
                .open({
                    title: 'Remove this tenant',
                    message:
                        'This will remove the everything owned by the tenant.',
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

    deleteZitadelUser(data: ZitadelTenantModel): void {
        this.isLoading = true;
        this.showAlert = false;

        this._subscription.add(
            this._zitadelTenantsService.deleteZitadelTenant(data.id).subscribe({
                next: () => this.getZitadelTenants(),
                error: (err: HttpErrorResponse) =>
                    this.onFailed(
                        err.status === 500
                            ? '500: Internal Server Error'
                            : err.error
                    ),
            })
        );
    }

    viewZitadelUsers(id: string): void {
        this.router
            .navigate([RoutesConstants.ZITADEL_USERS], {
                queryParams: { tenant_id: id },
            })
            .then();
    }

    viewDevice(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICES], {
                queryParams: { tenant_id: id },
            })
            .then();
    }

    viewDeviceLogs(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICE_LOGS], {
                queryParams: { tenant_id: id },
            })
            .then();
    }

    viewDeviceUser(id: string): void {
        this.router
            .navigate([RoutesConstants.DEVICE_USERS], {
                queryParams: { tenant_id: id },
            })
            .then();
    }

    viewSharedUser(id: string): void {
        this.router
            .navigate([RoutesConstants.SHARED_USERS], {
                queryParams: { tenant_id: id },
            })
            .then();
    }

    viewAdminLogs(id: string): void {
        this.router
            .navigate([RoutesConstants.PORTAL_LOGS], {
                queryParams: { tenant_id: id },
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
