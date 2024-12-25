import { PageableModel } from '../../shared/types/pagination.types';

export class AdminUsersModel extends PageableModel {
    items?: AdminUserModel[];
}

export class AdminUserModel {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
}
