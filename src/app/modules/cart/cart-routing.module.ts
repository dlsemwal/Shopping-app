import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: CartComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'pay/:amount', component: PayComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
