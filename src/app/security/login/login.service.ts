import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/do';
import { CM_API } from '../../app.api';
import { User } from './user.model';



@Injectable()

export class LoginService {

    user: User;
    lastUrl: string

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
    }

    isLoggedIn() {
        return this.user !== undefined;
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${CM_API}/login`,
            {email: email, password: password})
                .do(user => this.user = user);
    }

    logout() {
        this.user = undefined;
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)]);
    }
}

