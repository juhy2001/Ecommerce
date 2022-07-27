import { OrderComponent } from './modules/order/order.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { WishlistComponent } from './modules/home/wishlist/wishlist.component';
import { RegisterComponent } from './modules/register/register.component';
import { CartComponent } from './modules/home/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'product-card',component:ProductCardComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'payment',component:PaymentComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
