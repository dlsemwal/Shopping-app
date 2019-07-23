import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthService } from './shared/services/auth.service';
import { CommonService } from './shared/services/common.service';
import { CartService } from './shared/services/cart.service';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
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
      { provide: HTTP_INTERCEPTORS, useClass: CommonService, multi: true }
    ],
    CartService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
