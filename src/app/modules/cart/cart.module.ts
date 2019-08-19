import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [CartComponent, OrdersComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: []
})
export class CartModule { }
