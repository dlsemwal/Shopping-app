import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LStorageService {

  constructor() { }

  setToken(token) {
    localStorage.setItem('Authorization', token);
  }

  get getToken() {
    if (!localStorage.getItem('Authorization')) return null;
    return localStorage.getItem('Authorization');
  }

  setUser(user) {
    console.log(user);

    localStorage.setItem('user', JSON.stringify(user));
  }
  get user() {
    if (!localStorage.getItem('user')) return null;
    return JSON.parse(localStorage.getItem('user'))
  }

  get getUser() {
    if (this.user) return this.user.first_name + this.user.last_name
    else return null;
    // let userName = JSON.parse(localStorage.getItem('user'))
    // console.log(JSON.parse(localStorage.getItem('user')).first_name, JSON.parse(localStorage.getItem('user')).cart_id);

    // return userName.first_name;
  }
  get userCart() {
    if (this.user) return this.user.cart_id;
    else return null
    // let cart =
    // return JSON.parse(localStorage.getItem('user')).cart_id;
  }
  get userName() {
    return this.user.first_name + ' ' + this.user.last_name
  }
}
