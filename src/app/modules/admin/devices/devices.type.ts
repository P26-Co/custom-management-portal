import { PageableModel } from '../../shared/types/pagination.types';

export class DevicesModel extends PageableModel {
    items?: DeviceModel[];
}

export class DeviceModel {
    id?: string;
    name?: string;
    device_id?: string;
    len_device_users?: number;
}
