
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private authService: AuthService,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAuthenticated) {
      return true;
    }
    window.alert('Please log in!!!')
    return false;
  }

}



