import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomarloginComponent } from './component/customar-login/customarlogin.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { CrudproductComponent } from './component/crudproduct/crudproduct.component';
import { CustomarRegComponent } from './component/customar-reg/customar-reg.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { SuccessComponent } from './component/success/success.component';
import { ContactsuccessComponent } from './component/contactsuccess/contactsuccess.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    CustomarloginComponent,
    AdminloginComponent,
    CrudproductComponent,
    CustomarRegComponent,
    OrderDetailsComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    SuccessComponent,
    ContactsuccessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
