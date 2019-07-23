import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LStorageService {

  constructor() { }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUser(user) {
    localStorage.setItem('user', user);
  }

  getUser() {
    return localStorage.getItem('user');
  }

}
