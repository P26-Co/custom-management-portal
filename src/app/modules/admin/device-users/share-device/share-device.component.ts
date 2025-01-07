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
import { DeviceUsersComponent } from '../device-users.component';
import { DeviceUserModel } from '../device-users.type';
import { HttpErrorResponse } from '@angular/common/http';
import { MatOption, MatSelect } from '@angular/material/select';
import { ZitadelUserModel, ZitadelUsersModel } from '../../zitadel-users/zitadel-users.type';
import { Pagination } from '../../../shared/types/pagination.types';
import { PAGE_SIZES } from '../../../shared/constants/others.constants';
import { ZitadelUsersService } from '../../zitadel-users/zitadel-users.service';
import { SharedUsersService } from '../../shared-users/shared-users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-share-device',
    templateUrl: './share-device.component.html',
    styleUrls: ['./share-device.component.scss'],
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
        MatSelect,
        MatOption,
    ],
})
export class ShareDeviceComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    zitadelUsers: ZitadelUserModel[] = [];

    pagination: Pagination = {
        page: 0,
        length: 0,
        size: PAGE_SIZES[0]
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
        private _snackBar: MatSnackBar,
        private _zitadelUsersService: ZitadelUsersService,
        private _formBuilder: UntypedFormBuilder,
        private _sharedUsersService: SharedUsersService,
        public matDialogRef: MatDialogRef<DeviceUsersComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DeviceUserModel
    ) {}

    ngOnInit(): void {
        this.createForm = this._formBuilder.group({
            deviceUserId: [this.data?.id ?? '', [Validators.required]],
            deviceId: [this.data?.device?.id ?? '', [Validators.required]],
            zitadelUserId: ['', [Validators.required]],
        });
        this.pagination.tenant_id = this.data.user.tenant_id;
        this.getZitadelUsers();
    }

    getZitadelUsers(): void {
        this.isLoading = true;

        if (this.offset <= this.totalElements) {
            this.isLoading = true;
            this.subscription.add(this._zitadelUsersService.getZitadelUsers(
                this.pagination
            ).subscribe({
                next: (res: ZitadelUsersModel): void => {
                    this.zitadelUsers = this.zitadelUsers.concat(res.items);
                    this.totalElements = res.total;
                    this.offset += this.pagination.size;
                    this.pagination.page++;
                },
                error: (err: HttpErrorResponse) => {
                    if (err.status !== 404) {
                        this.onFailed(
                            err.status === 500 ? '500: Internal Server Error' : err.error
                        );
                    }
                },
                complete: (): boolean => this.isLoading = false
            }));
        }
    }

    onScroll(): void {
        if (this.isLoading || this.offset > this.totalElements) {
            return;
        }
        this.getZitadelUsers();
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
                this._sharedUsersService
                    .addShareUser(this.createForm.value)
                    .subscribe({
                        next: (): void => {
                            this._snackBar.open('Shared successfully.!');
                            this.matDialogRef.close(true);
                        },
                        error: (err: HttpErrorResponse) => {
                            this.onFailed(err.error.detail ?? err.statusText);
                        },
                    })
            );
        } else {
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
