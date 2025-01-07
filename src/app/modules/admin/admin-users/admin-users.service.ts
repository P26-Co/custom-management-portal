import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { AdminUserModel, AdminUsersModel } from './admin-users.type';

@Injectable({
    providedIn: 'root',
})
export class AdminUsersService {
    constructor(private _httpClient: HttpClient) {}

    getAdminUsers(pagination: Pagination): Observable<AdminUsersModel> {
        return this._httpClient.get<AdminUsersModel>(APIs.PORTAL_USERS, {
            params: createHttpParams(pagination),
        });
    }

    createAdminUser(data: AdminUserModel): Observable<AdminUserModel> {
        return this._httpClient.post<AdminUserModel>(APIs.PORTAL_USERS, data);
    }

    updateAdminUser(id: string, data: AdminUserModel): Observable<AdminUserModel> {
        return this._httpClient.patch<AdminUserModel>(
            `${APIs.PORTAL_USERS}${id}`,
            data
        );
    }

    deleteAdminUser(id: string): Observable<any> {
        return this._httpClient.delete<any>(`${APIs.PORTAL_USERS}${id}`);
    }
}
