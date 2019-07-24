import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { config, categoriesUrl } from '../../configs/config';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  

  getImg() {
    return this.http.get(config.imgUrl);
  }

  getComments() {
    return this.http.get(config.commentUrl);
  }
  getUsers() {
    return this.http.get(config.usersUrl);
  }
  getProducts() {
    return this.http.get(config.listUrl);
  }
  active(path) {
    if (window.location.pathname.indexOf(path) >= 1) {
      return true;
    } else {
      return false;
    }
  }
  getShoppingProd(x?) {
    const url = x || 'assets/products.json'
    return this.http.get(url);
  }
  getCategories() {
    return this.http.get(categoriesUrl);
  }

}
