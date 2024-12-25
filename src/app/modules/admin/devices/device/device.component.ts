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
import { DevicesComponent } from '../devices.component';
import { DeviceModel } from '../devices.type';
import { DevicesService } from '../devices.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss'],
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
export class DeviceComponent implements OnInit, OnDestroy {
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
        private devicesService: DevicesService,
        public matDialogRef: MatDialogRef<DevicesComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DeviceModel
    ) {}

    ngOnInit(): void {
        this.createForm = this._formBuilder.group({
            id: [this.data?.id ?? '', [Validators.required]],
            name: [this.data?.name ?? '', [Validators.required]],
            device_id: [this.data?.device_id ?? ''],
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
                this.devicesService.updateDevice(this.data.id, this.createForm.value).subscribe({
                    next: (): void => this.matDialogRef.close(true),
                    error: (err: HttpErrorResponse) => {
                        this.onFailed(
                            err.error.detail ?? err.statusText
                        );
                    }
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
