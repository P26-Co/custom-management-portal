import { PageableModel } from '../../shared/types/pagination.types';

export class ZitadelTenantsModel extends PageableModel {
    items?: ZitadelTenantModel[];
}

export class ZitadelTenantModel {
    id?: string;
    name?: string;
    zitadel_tenant_id?: string;
}
