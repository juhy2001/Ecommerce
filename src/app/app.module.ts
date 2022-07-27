import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { WishlistComponent } from './modules/home/wishlist/wishlist.component';
import { CartComponent } from './modules/home/cart/cart.component';
import { CategoryComponent } from './modules/home/category/category.component';
import { NavbarComponent } from './modules/home/navbar/navbar.component';
import { FooterComponent } from './modules/home/footer/footer.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './modules/payment/payment.component';
import { OrderComponent } from './modules/order/order.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    WishlistComponent,
    CartComponent,
    CategoryComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    OrderComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
