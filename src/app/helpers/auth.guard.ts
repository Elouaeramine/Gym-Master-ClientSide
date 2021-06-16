import { UsersService } from './../services/users.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UsersService

    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const user = this.userService.userValue;
        if (! user) {
            // authorised so return true

            console.log('hani lena')
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
          }

          return true;
        // not logged in so redirect to login page with the return url
    }
}
