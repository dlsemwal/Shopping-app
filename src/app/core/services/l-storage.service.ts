import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LStorageService {
  constructor() {}

  setToken(token) {
    localStorage.setItem("Authorization", token);
  }

  get getToken() {
    if (!localStorage.getItem("Authorization")) return null;
    return localStorage.getItem("Authorization");
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  get user() {
    if (!localStorage.getItem("user")) return null;
    return JSON.parse(localStorage.getItem("user"));
  }

  get getUser() {
    if (this.user) return this.user.first_name + this.user.last_name;
    else return null;
  }
  get userCart() {
    if (this.user) return this.user.cart_id;
    else return null;
    // let cart =
    // return JSON.parse(localStorage.getItem('user')).cart_id;
  }
  get userName() {
    return this.user
      ? (this.user.first_name || "") + " " + (this.user.last_name || "")
      : "";
  }
}
