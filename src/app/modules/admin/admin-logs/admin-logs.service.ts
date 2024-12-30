import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { AdminLogsModel } from './admin-logs.type';

@Injectable({
    providedIn: 'root',
})
export class AdminLogsService {
    constructor(private _httpClient: HttpClient) {}

    getAdminLogs(pagination: Pagination): Observable<AdminLogsModel> {
        return this._httpClient.get<AdminLogsModel>(APIs.ADMIN_LOG_ACTIVITY, {
            params: createHttpParams(pagination),
        });
    }
}
