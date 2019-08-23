import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PayComponent } from './pay/pay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CartComponent,
    OrdersComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    NgxStripeModule.forRoot('pk_test_wLfshAruwhWsPQdYHPuKoPU1002c5hB3wj'),
  ],
  exports: [],
  providers: []
})
export class CartModule { }
