import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';
import { PicturesComponent } from './pictures/pictures.component';
import { UserComponent } from './user/user.component';
import { AddItemsComponent } from './menu-items/add-items/add-items.component';
import { AuthGuard } from '../../core/guards/auth-guard.service';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'comments/:page', component: CommentsComponent },
      { path: 'add-product', loadChildren: './add-product/add-product.module#AddProductModule' },
      { path: 'pictures/:page', component: PicturesComponent },
      { path: 'user', component: UserComponent },
      { path: 'addItems', component: AddItemsComponent },
      { path: 'menu-items', loadChildren: './menu-items/menu-items.module#MenuItemsModule' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
