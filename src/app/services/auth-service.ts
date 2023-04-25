import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserData } from "../data/user";
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<UserData | null>;
    public user: Observable<UserData | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }
      
    login(email:string, password:string ) {
        return this.http.post<UserData>(`${environment.apiUrl}/auth/signin`, {email, password})
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }

    logout() {
        localStorage.removeItem("user");
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}