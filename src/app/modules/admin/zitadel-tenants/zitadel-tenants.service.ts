import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { ZitadelTenantsModel } from './zitadel-tenants.type';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';

@Injectable({
    providedIn: 'root',
})
export class ZitadelTenantsService {
    constructor(private _httpClient: HttpClient) {}

    getZitadelTenants(pagination: Pagination): Observable<ZitadelTenantsModel> {
        return this._httpClient.get<ZitadelTenantsModel>(APIs.ZITADEL_TENANTS, {
            params: createHttpParams(pagination)
        });
    }

    deleteZitadelTenant(id: string): Observable<any> {
        return this._httpClient.delete<any>(`${APIs.ZITADEL_TENANTS}${id}`);
    }

}
