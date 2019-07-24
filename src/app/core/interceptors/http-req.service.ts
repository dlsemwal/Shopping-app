import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LStorageService } from '../services/l-storage.service';
import { loginUrl } from 'src/app/configs/config';

@Injectable({
  providedIn: 'root'
})
export class HttpReqIntercepter implements HttpInterceptor {

  constructor(private lStorage: LStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (
      // !req.url.includes(config.loginUrl)
      // tslint:disable-next-line:triple-equals
      req.url == loginUrl
    ) {
      return next.handle(req);
    }
    const modified = req.clone(
      {
        setHeaders: {
          'Authorization': this.lStorage.getToken()
        }
      });

    return next.handle(modified);


  }
}
