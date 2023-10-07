import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
