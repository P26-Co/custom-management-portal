import { ROLE } from '../../../core/user/user.types';
import { PageableModel } from '../../shared/types/pagination.types';
import { ZitadelTenantModel } from '../zitadel-tenants/zitadel-tenants.type';

export class TenantManagersModel extends PageableModel {
    items?: TenantManagerModel[];
}

export class TenantManagerModel {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: ROLE;
    tenant_id?: string;
    active?: boolean;
    tenant?: ZitadelTenantModel;
}
