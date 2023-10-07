import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from 'src/app/components/customer/add-customer/add-customer.component';
import { ListCustomerComponent } from 'src/app/components/customer/list-customer/list-customer.component';
import { DetailCustomerComponent } from 'src/app/components/customer/detail-customer/detail-customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddCustomerComponent,
    ListCustomerComponent,
    DetailCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"customer/add",component:AddCustomerComponent},
      {path:"customer/:id",component:DetailCustomerComponent},
      {path:"customer",component:ListCustomerComponent}
    ])
  ]
})
export class CustomersModule { }
