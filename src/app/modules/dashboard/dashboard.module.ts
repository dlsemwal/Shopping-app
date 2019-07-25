import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { PicturesComponent } from './pictures/pictures.component';
import { CommentsComponent } from './comments/comments.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AddItemsComponent } from './menu-items/add-items/add-items.component';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { AuthGuard } from '../../core/guards/auth-guard.service';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    UserComponent,
    PicturesComponent,
    AddItemsComponent,
    CommentsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService]
})
export class DashboardModule { }
