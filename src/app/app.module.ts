import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhoneProductComponent } from './phone-product/phone-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ClothingComponent } from './clothing/clothing.component';
import { FilterPipe } from './search/filter.pipe';
import { BillingComponent } from './billing/billing.component';
import { AdminComponent } from './admin/admin.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    PhoneProductComponent,
    NavbarComponent,
    FooterComponent,
    ClothingComponent,
    FilterPipe,
    BillingComponent,
    AdminComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
