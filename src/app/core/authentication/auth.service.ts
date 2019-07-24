import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { loginUrl } from '../../configs/config';
import { LStorageService } from '../services/l-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private router: Router, private http: HttpClient, private lStorage: LStorageService) { }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return this.lStorage.getToken() != null && !this.isTokenExpired();

  }

  isTokenExpired(): boolean {
    return false;
  }

  login(loginData): void {
    this.http.post(loginUrl, loginData).subscribe((res: any) => {
      console.log(loginUrl, res);
      this.lStorage.setToken(res.data.token);
      this.lStorage.setUser(res.data.user.first_name);
      this.router.navigate(['/dashboard']);
    });

  }


  logout(): void {

    this.clear();
    this.router.navigate(['/auth']);
  }

}
