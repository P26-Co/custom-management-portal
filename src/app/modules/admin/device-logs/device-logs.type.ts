import { PageableModel } from '../../shared/types/pagination.types';
import { DeviceUserModel } from '../device-users/device-users.type';
import { DeviceModel } from '../devices/devices.type';
import { ZitadelUserModel } from '../zitadel-users/zitadel-users.type';

export class DeviceLogsModel extends PageableModel {
    items?: DeviceLogModel[];
}

export class DeviceLogModel {
    id?: string;
    timestamp: string;
    activity_type: string;
    login_as?: string;
    device_username?: DeviceUserModel;
    device?: DeviceModel;
    user?: ZitadelUserModel;
}
