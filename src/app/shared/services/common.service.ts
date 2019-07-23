import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LStorageService } from './l-storage.service';
import { config, categoriesUrl } from '../../configs/config';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements HttpInterceptor {

  constructor(private http: HttpClient, private lStorage: LStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (
      // !req.url.includes(config.loginUrl)
      // tslint:disable-next-line:triple-equals
      req.url == config.loginUrl
    ) {
      return next.handle(req);
    }
    const modified = req.clone(
      {
        setHeaders: {
          'X-Access-Token': this.lStorage.getToken(),
          'Authorization': this.lStorage.getToken()

        }
      });

    return next.handle(modified);


  }

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
