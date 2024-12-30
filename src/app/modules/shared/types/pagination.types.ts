export interface Pagination {
    length: number;
    size: number;
    page: number;
    search?: string;
    tenant_id?: string;
    zitadel_user_id?: number;
    device_id?: number;
    device_user_id?: number;
    shared_user_id?: number;
    admin_user_id?: number;
}

export class PageableModel {
    page: number;
    size: number;
    total: number;
}
