import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { DeviceUsersModel } from './device-users.type';

@Injectable({
    providedIn: 'root',
})
export class DeviceUsersService {
    constructor(private _httpClient: HttpClient) {}

    getDeviceUsers(pagination: Pagination): Observable<DeviceUsersModel> {
        return this._httpClient.get<DeviceUsersModel>(APIs.DEVICE_USERS, {
            params: createHttpParams(pagination),
        });
    }

    deleteDeviceUser(id: string): Observable<any> {
        return this._httpClient.delete<any>(`${APIs.DEVICE_USERS}${id}`);
    }
}
