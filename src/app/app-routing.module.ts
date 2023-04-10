import { Component, NgModule } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { PhoneProductComponent } from './phone-product/phone-product.component';
// import { AuthGuard } from './service/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'phone',
    component: PhoneProductComponent
  },
  {
    path: 'clothing',
    component: ClothingComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path : 'buynow',
    component : BillingComponent
  },
  {
    path: 'admin',
    component : AdminComponent
  },
  {
    path: 'invoice',
    component : InvoiceComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
