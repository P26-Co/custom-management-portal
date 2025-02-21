import { DatePipe, NgClass, NgIf } from '@angular/common';
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
import { PAGE_SIZES } from '../../shared/constants/others.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { PortalLogsService } from './portal-logs.service';
import { PortalLogModel, PortalLogsModel } from './portal-logs.type';

@Component({
    selector: 'app-portal-logs',
    templateUrl: './portal-logs.component.html',
    styleUrls: ['./portal-logs.component.scss'],
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
        DatePipe,
    ],
})
export class PortalLogsComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    displayedColumns: string[] = [
        'portal_user',
        'endpoint',
        'action',
        'device',
        'device_user',
        'user',
        'shared_user',
        'timestamp',
    ];

    pageSize: number[] = PAGE_SIZES;
    portalLogs: PortalLogModel[];

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
        private _router: Router,
        private _sharedUsersService: PortalLogsService
    ) {}

    ngOnInit(): void {
        this.pagination.tenant_id =
            this._activatedRoute.snapshot.queryParamMap.get('tenant_id');
        this.pagination.zitadel_user_id =
            this._activatedRoute.snapshot.queryParamMap.get('zitadel_user_id');
        this.pagination.device_id =
            this._activatedRoute.snapshot.queryParamMap.get('device_id');
        this.pagination.device_user_id =
            this._activatedRoute.snapshot.queryParamMap.get('device_user_id');
        this.pagination.shared_user_id =
            this._activatedRoute.snapshot.queryParamMap.get('shared_user_id');
        this.pagination.portal_user_id =
            this._activatedRoute.snapshot.queryParamMap.get('portal_user_id');

        this.pagination.page = Number(
            this._activatedRoute.snapshot.queryParamMap.get('page') ?? 0
        );
        this.pagination.size = Number(
            this._activatedRoute.snapshot.queryParamMap.get('size') ??
                this.pageSize[0]
        );

        this.isLoading = true;
        this.getPortalLogs();
    }

    getPortalLogs(): void {
        this.isLoading = true;
        this.queryParamHandler();

        this._subscription.add(
            this._sharedUsersService.getPortalLogs(this.pagination).subscribe({
                next: (res: PortalLogsModel): void => {
                    this.portalLogs = res.items;
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
        this.pagination.device_id = undefined;
        this.pagination.shared_user_id = undefined;
        this.pagination.portal_user_id = undefined;
        this.getPortalLogs();
    }

    queryParamHandler(): void {
        this._router
            .navigate(['.'], {
                relativeTo: this._activatedRoute,
                queryParams: {
                    tenant_id: this.pagination.tenant_id,
                    zitadel_user_id: this.pagination.zitadel_user_id,
                    device_id: this.pagination.device_id,
                    device_user_id: this.pagination.device_user_id,
                    shared_user_id: this.pagination.shared_user_id,
                    portal_user_id: this.pagination.portal_user_id,
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
        this.getPortalLogs();
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
