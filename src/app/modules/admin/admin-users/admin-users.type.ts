import { ROLE } from '../../../core/user/user.types';
import { PageableModel } from '../../shared/types/pagination.types';

export class AdminUsersModel extends PageableModel {
    items?: AdminUserModel[];
}

export class AdminUserModel {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: ROLE;
    tenant_id?: string;
}
