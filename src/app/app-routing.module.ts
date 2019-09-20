import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "cart", loadChildren: "./modules/cart/cart.module#CartModule" },
  {
    path: "manage",
    loadChildren:
      "./modules/manage-products/manage-products.module#ManageProductsModule"
  },
  {
    path: "",
    loadChildren: "./modules/shopping/shopping.module#ShoppingModule"
  },
  { path: "shared", loadChildren: "./shared/shared.module#SharedModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
