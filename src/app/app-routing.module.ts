import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard.service';

const routes: Routes = [
  { path: 'auth', /*canActivate: [LoginGuard],*/ loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'cart', loadChildren: './modules/cart/cart.module#CartModule' },
  { path: 'manage', loadChildren: './modules/manage-products/manage-products.module#ManageProductsModule' },
  { path: '', loadChildren: './modules/shopping/shopping.module#ShoppingModule' },
  { path: 'shared', loadChildren: './shared/shared.module#SharedModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
