import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { SharedUserModel, SharedUserReq, SharedUsersModel } from './shared-users.type';

@Injectable({
    providedIn: 'root',
})
export class SharedUsersService {
    constructor(private _httpClient: HttpClient) {}

    getSharedUsers(pagination: Pagination): Observable<SharedUsersModel> {
        return this._httpClient.get<SharedUsersModel>(APIs.SHARED_USERS, {
            params: createHttpParams(pagination),
        });
    }

    addShareUser(data: SharedUserReq): Observable<SharedUserModel> {
        return this._httpClient.post<SharedUserModel>(APIs.SHARED_USER, data);
    }

    deleteShareUser(id: number): Observable<SharedUserModel> {
        return this._httpClient.delete<SharedUserModel>(`${APIs.SHARED_USER}/${id}`);
    }

}
