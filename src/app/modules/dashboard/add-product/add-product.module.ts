import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { CommonService } from '../../../core/services/common.service';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    FormsModule
  ],
  providers: [CommonService]

})
export class AddProductModule {

}
