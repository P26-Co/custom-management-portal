import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { TenantManagerModel, TenantManagersModel } from './tenant-managers.type';

@Injectable({
    providedIn: 'root',
})
export class TenantManagersService {
    constructor(private _httpClient: HttpClient) {}

    getTenantManagers(pagination: Pagination): Observable<TenantManagersModel> {
        return this._httpClient.get<TenantManagersModel>(APIs.PORTAL_USERS, {
            params: createHttpParams(pagination),
        });
    }

    createTenantManager(data: TenantManagerModel): Observable<TenantManagerModel> {
        return this._httpClient.post<TenantManagerModel>(APIs.PORTAL_USERS, data);
    }

    updateTenantManager(id: string, data: TenantManagerModel): Observable<TenantManagerModel> {
        return this._httpClient.patch<TenantManagerModel>(
            `${APIs.PORTAL_USERS}${id}`,
            data
        );
    }

    deleteTenantManager(id: string): Observable<any> {
        return this._httpClient.delete<any>(`${APIs.PORTAL_USERS}${id}`);
    }
}
