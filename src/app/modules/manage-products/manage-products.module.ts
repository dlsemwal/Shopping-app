import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductsRoutingModule } from './manage-products-routing.module';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ViewProductsComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    ManageProductsRoutingModule,
    SharedModule
  ]
})
export class ManageProductsModule { }
