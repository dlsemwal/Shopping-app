import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpReqIntercepter } from './core/interceptors/http-req.service';
import { AuthService } from './core/authentication/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';


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
    NgbModule,
    SharedModule,
  ],
  providers: [
    AuthService, [
      { provide: HTTP_INTERCEPTORS, useClass: HttpReqIntercepter, multi: true }
    ],

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
