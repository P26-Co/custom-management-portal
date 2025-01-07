import { PageableModel } from '../../shared/types/pagination.types';
import { ZitadelTenantModel } from '../zitadel-tenants/zitadel-tenants.type';

export class ZitadelUsersModel extends PageableModel {
    items?: ZitadelUserModel[];
}

export class ZitadelUserModel {
    id?: string;
    name?: string;
    email?: string;
    tenant_id?: string;
    zitadel_user_id?: string;
    tenant?: ZitadelTenantModel;
}
