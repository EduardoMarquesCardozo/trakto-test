﻿import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../data/user';
import { AuthService } from './auth-service';



@Injectable({ providedIn: 'root' })
export class LoggedinGuard {
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate() {
        const user = this.auth.userValue;
        if (user) {
            this.router.navigate(['/modules']);
            return false;
        }
        
        return true;
    }
}