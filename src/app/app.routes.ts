import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// prettier-ignore
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/zitadel-users'
    { path: '', pathMatch: 'full', redirectTo: 'zitadel-users' },

    // Redirect signed-in user to the '/zitadel-users'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'zitadel-users',
    },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'forgot-password',
                loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes'),
            },
            {
                path: 'reset-password',
                loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes'),
            },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes') },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: 'zitadel-tenants',
                loadChildren: () => import('app/modules/admin/zitadel-tenants/zitadel-tenants.routes'),
            },
            {
                path: 'zitadel-users',
                loadChildren: () => import('app/modules/admin/zitadel-users/zitadel-users.routes'),
            },
            {
                path: 'devices',
                loadChildren: () => import('app/modules/admin/devices/devices.routes'),
            },
            {
                path: 'device-users',
                loadChildren: () => import('app/modules/admin/device-users/device-users.routes'),
            },
            {
                path: 'shared-users',
                loadChildren: () => import('app/modules/admin/shared-users/shared-users.routes'),
            },
            {
                path: 'device-logs',
                loadChildren: () => import('app/modules/admin/device-logs/device-logs.routes'),
            },
            {
                path: 'admin-users',
                loadChildren: () => import('app/modules/admin/admin-users/admin-users.routes'),
            },
            {
                path: 'tenant-managers',
                loadChildren: () => import('app/modules/admin/tenant-managers/tenant-managers.routes'),
            },
            {
                path: 'task-status',
                loadChildren: () => import('app/modules/admin/task-status/task-status.routes'),
            },
            {
                path: 'portal-logs',
                loadChildren: () => import('app/modules/admin/portal-logs/portal-logs.routes'),
            },

            // 404 & Catch all
            {
                path: '404-not-found',
                pathMatch: 'full',
                loadChildren: () => import('app/modules/error/error-404/error-404.routes'),
            },
            { path: '**', redirectTo: '404-not-found' },
        ],
    },
];
