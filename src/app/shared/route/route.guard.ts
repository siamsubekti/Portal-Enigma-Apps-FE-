import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { NbToastrService } from '@nebular/theme';
// import { Credential } from '../../auth/models/credential.model';
import { AuthService } from '../../auth/services/auth.service';
// import { Menu } from '../../master/menus/models/menu.model';
import { environment as env, AlertMessage } from '../../../environments/environment';
import { StorageService } from '../utilities/storage.service';

@Injectable()
export class RouteGuardService implements CanActivate, CanActivateChild {
  constructor(
    private readonly storage: StorageService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastr: NbToastrService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('PARENT:', route.url);
    return this.authorized(route);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log('CHILD:', childRoute.url);
    return this.authorized(childRoute);
  }

  private authorized(route: ActivatedRouteSnapshot): boolean {
    const authenticated: boolean = this.authService.authenticated;
    const sessionExpired: boolean = this.authService.isSessionExpired;
    const accessAllowed: boolean = true;

    if (authenticated && !accessAllowed) {
      this.toastr.danger(`You're not authorized to access that page.`, 'Unauthorized Access');
      this.router.navigateByUrl('home');
    } else if (authenticated && sessionExpired) {
      this.redirectToLogin('Your session was expired.');
    } else if (!authenticated) {
      this.redirectToLogin('Please login!');
    } else {
      this.authService.regenerate();
    }

    // console.log('AUTH:', { authenticated, accessAllowed, sessionExpired, authorized: (authenticated && accessAllowed && !sessionExpired) });
    return authenticated && accessAllowed && !sessionExpired;
  }

  private redirectToLogin(message: string) {
    const alert: AlertMessage = {
      status: 'danger',
      message,
    };
    this.authService.destroy();
    this.storage.set('message', JSON.stringify(alert));
    this.router.navigateByUrl(env.loginUrl);
  }

  // private get allowedMenus(): Menu[] {
  //   const credential: Credential = this.authService.auth ? this.authService.auth : null;

  //   return credential ? credential.data.menus : [];
  // }

  // private getMenu(path: string): Menu {
  //   return this.allowedMenus.find((menu: Menu) => {
  //     return (path.indexOf(menu.path) >= 0);
  //   });
  // }

}
