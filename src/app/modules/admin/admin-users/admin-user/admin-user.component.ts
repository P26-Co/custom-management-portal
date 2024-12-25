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
import { AdminUsersComponent } from '../admin-users.component';
import { AdminUserModel } from '../admin-users.type';
import { AdminUsersService } from '../admin-users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-admin-user',
    templateUrl: './admin-user.component.html',
    styleUrls: ['./admin-user.component.scss'],
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
    ],
})
export class AdminUserComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    showAlert: boolean = false;
    isLoading: boolean = false;

    createForm: UntypedFormGroup;

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _adminUsersService: AdminUsersService,
        public matDialogRef: MatDialogRef<AdminUsersComponent>,
        @Inject(MAT_DIALOG_DATA) public data: AdminUserModel
    ) {}

    ngOnInit(): void {
        this.createForm = this._formBuilder.group({
            name: [this.data?.name ?? '', [Validators.required]],
            email: [this.data?.email ?? '', [Validators.required]],
            password: [null],
        });
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
                this._adminUsersService.updateAdminUser(this.data.id, this.createForm.value).subscribe({
                    next: (): void => this.matDialogRef.close(true),
                    error: (err: HttpErrorResponse) => this.onFailed(
                        err.status === 500 ? '500: Internal Server Error' : err.error
                    )
                })
            );
        } else {
            this.subscription.add(
                this._adminUsersService.createAdminUser(this.createForm.value).subscribe({
                    next: (): void => this.matDialogRef.close(true),
                    error: (err: HttpErrorResponse) => this.onFailed(
                        err.status === 500 ? '500: Internal Server Error' : err.error
                    )
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
