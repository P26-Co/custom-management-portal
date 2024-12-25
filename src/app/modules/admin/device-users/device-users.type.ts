import { PageableModel } from '../../shared/types/pagination.types';
import { DeviceModel } from '../devices/devices.type';
import { ZitadelUserModel } from '../zitadel-users/zitadel-users.type';

export class DeviceUsersModel extends PageableModel {
    items?: DeviceUserModel[];
}

export class DeviceUserModel {
    id?: number;
    device_username?: string;
    device?: DeviceModel;
    user?: ZitadelUserModel;
}
