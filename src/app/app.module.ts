import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartcomponentComponent } from './components/cartcomponent/cartcomponent.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent, ProductdetailComponent, CartComponent, CartcomponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
