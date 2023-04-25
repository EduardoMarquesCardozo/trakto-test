import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../data/user';
import { AuthService } from './auth-service';



@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.auth.userValue;
        if (user) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}