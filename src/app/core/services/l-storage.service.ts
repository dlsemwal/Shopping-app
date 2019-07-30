import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LStorageService {

  constructor() { }

  setToken(token) {
    localStorage.setItem('Authorization', token);
  }

  getToken() {
    return localStorage.getItem('Authorization');
  }

  setUser(user) {
    localStorage.setItem('user', user);
  }

  get getUser() {
    return localStorage.getItem('user');
  }

}
