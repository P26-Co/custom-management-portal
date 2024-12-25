import { PageableModel } from '../../shared/types/pagination.types';
import { DeviceUserModel } from '../device-users/device-users.type';

export class DevicesModel extends PageableModel {
    items?: DeviceModel[];
}

export class DeviceModel {
    id?: number;
    name?: string;
    device_id?: string;
    device_users?: DeviceUserModel[];
}
