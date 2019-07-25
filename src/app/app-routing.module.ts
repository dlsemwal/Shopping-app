import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './core/guards/login-guard.service';

const routes: Routes = [
  { path: 'auth', /*canActivate: [LoginGuard],*/ loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'cart', loadChildren: './modules/cart/cart.module#CartModule' },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
  { path: '', loadChildren: './modules/shopping/shopping.module#ShoppingModule' },
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
