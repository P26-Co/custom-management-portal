import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { DevicesModel } from './devices.type';

@Injectable({
    providedIn: 'root',
})
export class DevicesService {
    constructor(private _httpClient: HttpClient) {}

    getDevices(pagination: Pagination): Observable<DevicesModel> {
        return this._httpClient.get<DevicesModel>(APIs.DEVICES, {
            params: createHttpParams(pagination),
        });
    }

    updateDevice(id: number, data: DevicesModel): Observable<DevicesModel> {
        return this._httpClient.patch<DevicesModel>(
            `${APIs.DEVICES}/${id}`,
            data
        );
    }

    deleteDevice(id: number): Observable<any> {
        return this._httpClient.delete<any>(`${APIs.DEVICES}/${id}`);
    }
}
