import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"customers",loadChildren: () => import("../app/modules/customers/customers.module").then(m=> m.CustomersModule)},
  {path:"products",loadChildren: () => import("../app/modules/products/products.module").then(m=> m.ProductsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
