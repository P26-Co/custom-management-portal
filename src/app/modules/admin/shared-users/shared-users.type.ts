import { PageableModel } from '../../shared/types/pagination.types';
import { DeviceUserModel } from '../device-users/device-users.type';
import { DeviceModel } from '../devices/devices.type';
import { ZitadelUserModel } from '../zitadel-users/zitadel-users.type';

export class SharedUsersModel extends PageableModel {
    items?: SharedUserModel[];
}

export class SharedUserModel {
    id?: number;
    shared_with_user_id?: number;
    device_user_id?: number;
    device_user?: DeviceUserModel;
    device?: DeviceModel;
    user?: ZitadelUserModel;
}

export class SharedUserReq {
    deviceId: number;
    deviceUserId: number;
    zitadelUserId: number;
}
