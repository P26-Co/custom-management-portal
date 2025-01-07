import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { PortalLogsModel } from './portal-logs.type';

@Injectable({
    providedIn: 'root',
})
export class PortalLogsService {
    constructor(private _httpClient: HttpClient) {}

    getPortalLogs(pagination: Pagination): Observable<PortalLogsModel> {
        return this._httpClient.get<PortalLogsModel>(APIs.PORTAL_LOGS, {
            params: createHttpParams(pagination),
        });
    }
}
