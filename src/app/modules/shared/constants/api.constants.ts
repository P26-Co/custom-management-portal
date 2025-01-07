import { environment } from '../../../../environments/environment';

export class APIs {
    public static readonly API = environment.HOST_API_URL;

    public static readonly PORTAL_USERS = APIs.API + 'portal-users/';

    public static readonly SIGN_IN = APIs.PORTAL_USERS + 'login';

    public static readonly ZITADEL_USERS = APIs.API + 'zitadel-users/';
    public static readonly ZITADEL_TENANTS = APIs.API + 'zitadel-tenants/';

    public static readonly DEVICES = APIs.API + 'devices/';
    public static readonly DEVICE_USERS = APIs.API + 'device-users/';
    public static readonly SHARED_USERS = APIs.API + 'shared-users/';

    public static readonly DEVICE_LOGS = APIs.API + 'device-logs/';
    public static readonly PORTAL_LOGS = APIs.API + 'portal-logs/';

    public static readonly TASK_STATUS = APIs.API + 'task-status/';
    public static readonly ZITADEL_IMPORT_USERS = APIs.TASK_STATUS + 'zitadel-import-users/';

}
