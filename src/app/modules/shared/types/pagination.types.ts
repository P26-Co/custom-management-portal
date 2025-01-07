export interface Pagination {
    length: number;
    size: number;
    page: number;
    search?: string;
    tenant_id?: string;
    zitadel_user_id?: string;
    device_id?: string;
    device_user_id?: string;
    shared_user_id?: string;
    portal_user_id?: string;
    role?: string;
}

export class PageableModel {
    page: number;
    size: number;
    total: number;
}
