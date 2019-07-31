import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ViewProductsComponent },
      { path: 'add', component: AddProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductsRoutingModule { }
