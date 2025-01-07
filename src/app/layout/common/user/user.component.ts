import { BooleanInput } from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { ROLE, User } from 'app/core/user/user.types';
import { Subject, takeUntil } from 'rxjs';
import {
    FuseNavigationService,
    FuseVerticalNavigationComponent,
} from '../../../../@fuse/components/navigation';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user',
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, MatIconModule, MatDividerModule],
})
export class UserComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: User;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _router: Router,
        private _userService: UserService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to user changes
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: User) => {
                this.user = user;

                if (user.role === ROLE.TENANT_MANAGER) {
                    const navComponent =
                        this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                            'mainNavigation'
                        );
                    if (!navComponent) {
                        return null;
                    }
                    const navigation = navComponent.navigation;

                    const zitadel_tenants = this._fuseNavigationService.getItem(
                        'main.zitadel_tenants',
                        navigation
                    );
                    zitadel_tenants.hidden = () => true;

                    const admin_users = this._fuseNavigationService.getItem(
                        'main.admin_users',
                        navigation
                    );
                    admin_users.hidden = () => true;

                    const tenant_managers = this._fuseNavigationService.getItem(
                        'main.tenant_managers',
                        navigation
                    );
                    tenant_managers.hidden = () => true;

                    const task_status = this._fuseNavigationService.getItem(
                        'main.task_status',
                        navigation
                    );
                    task_status.hidden = () => true;

                    navComponent.refresh();
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign out
     */
    signOut(): void {
        this._router.navigate(['/sign-out']).then();
    }
}
