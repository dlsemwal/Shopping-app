import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CommonService } from './core/services/common.service';
import { CartService } from './core/services/cart.service';
import { HttpReqIntercepter } from './core/interceptors/http-req.service';
import { AuthService } from './core/authentication/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService, [
      { provide: HTTP_INTERCEPTORS, useClass: HttpReqIntercepter, multi: true }
    ],
    CartService,
    CommonService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
