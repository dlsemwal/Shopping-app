import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './layout/carousel/carousel.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    LayoutComponent,
    CarouselComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ShoppingRoutingModule,
    SharedModule
  ]
})
export class ShoppingModule { }
