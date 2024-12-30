import { environment } from '../../../../environments/environment';

export class APIs {
    public static readonly API = environment.HOST_API_URL;

    public static readonly SIGN_IN = APIs.API + 'admin-login';

    public static readonly ZITADEL_USERS = APIs.API + 'zitadel-users';

    public static readonly DEVICES = APIs.API + 'devices';

    public static readonly DEVICE_USERS = APIs.API + 'device-users';
    public static readonly SHARED_USERS = APIs.API + 'shared-users';

    public static readonly SHARED_USER = APIs.API + 'shared-user';

    public static readonly ADMIN_USERS = APIs.API + 'admin-users';

    public static readonly LOG_ACTIVITY = APIs.API + 'log-activity';
    public static readonly ADMIN_LOG_ACTIVITY = APIs.API + 'admin-log-activity';
}
