import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from 'src/app/components/products/add-product/add-product.component';
import { DetailProductComponent } from 'src/app/components/products/detail-product/detail-product.component';
import { ListProductComponent } from 'src/app/components/products/list-product/list-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent,
    DetailProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"products/add",component:AddProductComponent},
      {path:"products/:id",component:DetailProductComponent},
      {path:"products", component:ListProductComponent},
    ])
  ]
})
export class ProductsModule { }
