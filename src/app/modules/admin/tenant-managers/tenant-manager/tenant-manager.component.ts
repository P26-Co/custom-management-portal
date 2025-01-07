import { NgIf } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';
import { fuseAnimations } from '../../../../../@fuse/animations';
import {
    FuseAlertComponent,
    FuseAlertType,
} from '../../../../../@fuse/components/alert';
import { TenantManagersComponent } from '../tenant-managers.component';
import { TenantManagerModel } from '../tenant-managers.type';
import { TenantManagersService } from '../tenant-managers.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ROLE } from '../../../../core/user/user.types';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { ZitadelTenantModel, ZitadelTenantsModel } from '../../zitadel-tenants/zitadel-tenants.type';
import { Pagination } from '../../../shared/types/pagination.types';
import { PAGE_SIZES } from '../../../shared/constants/others.constants';
import { ZitadelTenantsService } from '../../zitadel-tenants/zitadel-tenants.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-tenant-manager',
    templateUrl: './tenant-manager.component.html',
    styleUrls: ['./tenant-manager.component.scss'],
    standalone: true,
    animations: fuseAnimations,
    imports: [
        ReactiveFormsModule,
        FuseAlertComponent,
        MatInputModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        NgIf,
        MatOption,
        MatSelect,
        MatSlideToggle,
    ],
})
export class TenantManagerComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    zitadelTenants: ZitadelTenantModel[] = [];

    pagination: Pagination = {
        page: 0,
        length: 0,
        size: PAGE_SIZES[0],
    };
    totalElements = PAGE_SIZES[0] + 1;
    offset = 0;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    showAlert: boolean = false;
    isLoading: boolean = false;

    createForm: UntypedFormGroup;

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _tenantManagersService: TenantManagersService,
        private _zitadelTenantsService: ZitadelTenantsService,
        public matDialogRef: MatDialogRef<TenantManagersComponent>,
        @Inject(MAT_DIALOG_DATA) public data: TenantManagerModel
    ) {}

    ngOnInit(): void {
        this.createForm = this._formBuilder.group({
            name: [this.data?.name ?? '', [Validators.required]],
            email: [this.data?.email ?? '', [Validators.required]],
            role: [
                this.data?.role ?? ROLE.TENANT_MANAGER,
                [Validators.required],
            ],
            tenant_id: [this.data?.tenant_id ?? '', [Validators.required]],
            active: [this.data?.active ?? true, [Validators.required]],
            password: [null],
        });
        this.getZitadelTenants();
    }

    getZitadelTenants(): void {
        this.isLoading = true;

        if (this.offset <= this.totalElements) {
            this.isLoading = true;
            this.subscription.add(
                this._zitadelTenantsService
                    .getZitadelTenants(this.pagination)
                    .subscribe({
                        next: (res: ZitadelTenantsModel): void => {
                            this.zitadelTenants = this.zitadelTenants.concat(
                                res.items
                            );
                            this.totalElements = res.total;
                            this.offset += this.pagination.size;
                            this.pagination.page++;
                        },
                        error: (err: HttpErrorResponse) => {
                            if (err.status !== 404) {
                                this.onFailed(
                                    err.status === 500
                                        ? '500: Internal Server Error'
                                        : err.error
                                );
                            }
                        },
                        complete: (): boolean => (this.isLoading = false),
                    })
            );
        }
    }

    onScroll(): void {
        if (this.isLoading || this.offset > this.totalElements) {
            return;
        }
        this.getZitadelTenants();
    }

    save(): void {
        if (this.createForm.invalid) {
            return;
        }
        // this.createForm.disable();
        this.showAlert = false;
        this.isLoading = true;

        if (this.data) {
            this.subscription.add(
                this._tenantManagersService
                    .updateTenantManager(this.data.id, this.createForm.value)
                    .subscribe({
                        next: (): void => this.matDialogRef.close(true),
                        error: (err: HttpErrorResponse) =>
                            this.onFailed(
                                err.status === 500
                                    ? '500: Internal Server Error'
                                    : err.error
                            ),
                    })
            );
        } else {
            this.subscription.add(
                this._tenantManagersService
                    .createTenantManager(this.createForm.value)
                    .subscribe({
                        next: (): void => this.matDialogRef.close(true),
                        error: (err: HttpErrorResponse) =>
                            this.onFailed(
                                err.status === 500
                                    ? '500: Internal Server Error'
                                    : err.error
                            ),
                    })
            );
        }
    }

    onFailed(message: string): void {
        this.alert = {
            type: 'error',
            message,
        };
        this.showAlert = true;
        this.isLoading = false;
        this.createForm.enable();
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
