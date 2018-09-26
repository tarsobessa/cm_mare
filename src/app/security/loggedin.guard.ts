import { CanLoad, Route, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, RouterState } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';


@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private logginService: LoginService) {}

  checkAuthentication(path: string): boolean {
    const loggedIn = this.logginService.isLoggedIn();
    if (!loggedIn) {
      this.logginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path)
  }

}
