/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { RoutesConstants } from '../../../modules/shared/constants/routes.constants';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'main',
        title: 'Main Menu',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'main.zitadel_tenants',
                title: 'Zitadel Tenants',
                type: 'basic',
                icon: 'heroicons_outline:building-office-2',
                link: RoutesConstants.ZITADEL_TENANTS,
            },
            {
                id: 'main.zitadel_users',
                title: 'Zitadel Users',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: RoutesConstants.ZITADEL_USERS,
            },
            {
                id: 'main.devices',
                title: 'Devices',
                type: 'basic',
                icon: 'heroicons_outline:computer-desktop',
                link: RoutesConstants.DEVICES,
            },
            {
                id: 'main.device_users',
                title: 'Device Users',
                type: 'basic',
                icon: 'mat_outline:devices',
                link: RoutesConstants.DEVICE_USERS,
            },
            {
                id: 'main.shared_users',
                title: 'Shared Users',
                type: 'basic',
                icon: 'mat_outline:screen_share',
                link: RoutesConstants.SHARED_USERS,
            },
            {
                id: 'main.device_logs',
                title: 'Device Logs',
                type: 'basic',
                icon: 'mat_outline:screen_search_desktop',
                link: RoutesConstants.DEVICE_LOGS,
            },
            {
                id: 'divider-1',
                type: 'divider',
            },
            {
                id: 'main.admin_users',
                title: 'Admin Users',
                type: 'basic',
                icon: 'heroicons_outline:user-group',
                link: RoutesConstants.ADMIN_USERS,
            },
            {
                id: 'main.tenant_managers',
                title: 'Tenant Managers',
                type: 'basic',
                icon: 'mat_outline:supervised_user_circle',
                link: RoutesConstants.TENANT_MANAGERS,
            },
            {
                id: 'main.task_status',
                title: 'Task Status',
                type: 'basic',
                icon: 'heroicons_outline:server-stack',
                link: RoutesConstants.TASK_STATUS,
            },
            {
                id: 'main.admin_logs',
                title: 'Portal Logs',
                type: 'basic',
                icon: 'mat_outline:manage_search',
                link: RoutesConstants.PORTAL_LOGS,
            },
        ],
    },
];
