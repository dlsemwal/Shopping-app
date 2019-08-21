import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpReqIntercepter } from './core/interceptors/http-req.service';
import { AuthService } from './core/authentication/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { ErrorDialogComponent } from './core/error-handler/error-dialog/error-dialog.component';
import { ErrorDialogModule } from './core/error-handler/error-dialog.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ErrorDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [
    AuthService, [
      { provide: HTTP_INTERCEPTORS, useClass: HttpReqIntercepter, multi: true }
    ],
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
