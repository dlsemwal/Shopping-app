import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LStorageService } from '../services/l-storage.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpReqIntercepter implements HttpInterceptor {

  constructor(private lStorage: LStorageService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.lStorage.getToken) {
      req = req.clone(
        {
          setHeaders: {
            Authorization: this.lStorage.getToken
          }
        });
    }


    return next.handle(req).pipe(
      map(
        (ev: HttpEvent<any>) => {
          if (ev instanceof HttpResponse) {
            console.log(ev);

            return ev;
          }
        }
      ),
      catchError(
        (err: HttpErrorResponse) => {

          let data = {
            reason: err.statusText,
            status: err.status
          }

          return throwError(err)
        }
      )
    )


  }
}
