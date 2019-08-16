import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class ProductsModule { }
