import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { ZitadelUsersModel } from './zitadel-users.type';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';

@Injectable({
    providedIn: 'root',
})
export class ZitadelUsersService {
    constructor(private _httpClient: HttpClient) {}

    getZitadelUsers(pagination: Pagination): Observable<ZitadelUsersModel> {
        return this._httpClient.get<ZitadelUsersModel>(APIs.ZITADEL_USERS, {
            params: createHttpParams(pagination)
        });
    }

    deleteZitadelUser(id: number): Observable<any> {
        return this._httpClient.delete<any>(`${APIs.ZITADEL_USERS}/${id}`);
    }
}
