import { PageableModel } from '../../shared/types/pagination.types';

export class ZitadelUsersModel extends PageableModel {
    items?: ZitadelUserModel[];
}

export class ZitadelUserModel {
    id?: number;
    name?: string;
    email?: string;
    tenant_id?: string;
    zitadel_user_id?: string;
}
