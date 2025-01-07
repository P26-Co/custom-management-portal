import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIs } from '../../shared/constants/api.constants';
import { Pagination } from '../../shared/types/pagination.types';
import { createHttpParams } from '../../shared/utils/createReqData.util';
import { TaskModel, TaskStatusModel } from './task-status.type';

@Injectable({
    providedIn: 'root',
})
export class TaskStatusService {
    constructor(private _httpClient: HttpClient) {}

    getTaskStatuses(pagination: Pagination): Observable<TaskStatusModel> {
        return this._httpClient.get<TaskStatusModel>(APIs.TASK_STATUS, {
            params: createHttpParams(pagination),
        });
    }

    getTaskStatus(id: string): Observable<TaskModel> {
        return this._httpClient.get<TaskModel>(`${APIs.TASK_STATUS}${id}`);
    }

    importZitadelUser(): Observable<TaskModel> {
        return this._httpClient.post<TaskModel>(APIs.ZITADEL_IMPORT_USERS, {});
    }
}
