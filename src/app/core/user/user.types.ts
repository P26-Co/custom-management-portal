export enum ROLE {
    ADMIN = 'admin',
    TENANT_MANAGER = 'tenant_manager',
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: ROLE;
}
