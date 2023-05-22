import { Component, NgModule } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminComponent } from './admin/admin.component';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { MyOrderTrackingComponent } from './my-order-tracking/my-order-tracking.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { PhoneProductComponent } from './phone-product/phone-product.component';
import { ProductOverViewComponent } from './product-over-view/product-over-view.component';
import { ProductsComponent } from './products/products.component';
// import { AuthGuard } from './service/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SignUpComponent,
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
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'myorder',
    component: MyOrdersComponent
  },
  {
    path: 'tracking',
    component: MyOrderTrackingComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'overview',
    component : ProductOverViewComponent
  },{
    path : 'admin-order',
    component : AdminOrderComponent
  },
  {
    path: '**', component: NotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
