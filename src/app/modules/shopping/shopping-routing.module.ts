import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', component: ShoppingComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      {
        path: 'products/:categoryName/:categoryId',
        loadChildren: './products/products.module#ProductsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
