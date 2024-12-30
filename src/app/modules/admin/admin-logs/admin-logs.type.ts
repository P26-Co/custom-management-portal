import { PageableModel } from '../../shared/types/pagination.types';
import { DeviceUserModel } from '../device-users/device-users.type';
import { DeviceModel } from '../devices/devices.type';
import { ZitadelUserModel } from '../zitadel-users/zitadel-users.type';
import { AdminUserModel } from '../admin-users/admin-users.type';
import { SharedUserModel } from '../shared-users/shared-users.type';

export class AdminLogsModel extends PageableModel {
    items?: AdminLogModel[];
}

export class AdminLogModel {
    id?: number;
    timestamp: string;
    endpoint: string;
    admin_user: AdminUserModel;
    action?: string;
    device_username?: DeviceUserModel;
    device?: DeviceModel;
    user?: ZitadelUserModel;
    shared_user?: SharedUserModel;
}
