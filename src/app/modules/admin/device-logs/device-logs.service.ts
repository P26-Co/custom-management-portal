import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { DeviceLogsModel } from './device-logs.type';

@Injectable({
    providedIn: 'root',
})
export class DeviceLogsService {
    constructor(private _httpClient: HttpClient) {}

    getDeviceLogs(pagination: Pagination): Observable<DeviceLogsModel> {
        return this._httpClient.get<DeviceLogsModel>(APIs.DEVICE_LOGS, {
            params: createHttpParams(pagination),
        });
    }
}
