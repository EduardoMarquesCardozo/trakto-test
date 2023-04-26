import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { environment } from '../environments/environment';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.auth.userValue;
        const isLoggedIn = user?.access_token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}