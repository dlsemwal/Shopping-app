import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { loginUrl, signupUrl } from '../../configs/config';
import { LStorageService } from '../services/l-storage.service';
import { map } from 'rxjs/operators';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUser } from 'src/app/shared/interfaces/login-user';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private lStorage: LStorageService
  ) { }

  clear(): void {
    localStorage.clear();
  }



  get isTokenExpired(): boolean {
    const jwtHelper = new JwtHelperService();
    const token = this.lStorage.getToken;
    if (!token) { return false; }
    return jwtHelper.isTokenExpired(token);
  }

  get isAuthenticated(): boolean {
    return this.lStorage.getToken != null && !this.isTokenExpired;
  }

  get isAuthorised(): boolean {
    const jwtHelper = new JwtHelperService();
    const token: string = this.lStorage.getToken;
    if (!token) { return false; }
    const data: any = jwtHelper.decodeToken(token);
    return this.isAuthenticated && data.userRole == 'admin';
  }

  login(loginData: LoginUser) {
    return this.http.post(loginUrl, loginData)
      .pipe(
        map(
          (res: ServerResponse) => {

            if (res.data && res.data.token) {
              this.lStorage.setToken(res.data.token);
              this.lStorage.setUser(res.data.user);
              return true;
            } else {
              return false;
            }
          }
        ),
      );

  }
  signup(data: User) {
    return this.http.post(signupUrl, data);
  }


  logout(): void {

    this.clear();
    this.router.navigate(['/']);
  }

}
