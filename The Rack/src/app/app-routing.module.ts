import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { CartComponent } from './component/cart/cart.component';
import { CrudproductComponent } from './component/crudproduct/crudproduct.component';
import { CustomarRegComponent } from './component/customar-reg/customar-reg.component';
import { CustomarloginComponent } from './component/customar-login/customarlogin.component';
import { ProductsComponent } from './component/products/products.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { SuccessComponent } from './component/success/success.component';
import { ContactsuccessComponent } from './component/contactsuccess/contactsuccess.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path: 'customarlogin', component: CustomarloginComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'crudproduct', component: CrudproductComponent},
  {path: 'customarreg', component: CustomarRegComponent},
  {path: 'orderdetails', component: OrderDetailsComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'consuccess', component: ContactsuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
