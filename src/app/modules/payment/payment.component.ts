import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  order:boolean=false;
  public products : any = [];
  public grandTotal !: number;

  paymentForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      streetAddress: new FormControl(''),
      district: new FormControl('',[Validators.required]),
      zip: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      apartment: new FormControl('',),






    }
  );

  constructor(private cartService:CartService) { }


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      this.products = res;
      // console.log("hi",this.products)
      this.grandTotal = this.cartService.getTotalPrice();
    })
// const a=this.cartService.getProducts()
// console.log(a)
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  payment(){
    console.log(this.paymentForm.value)
    this.order=true;
    if(this.paymentForm.value.isvalid){
      
    }
  }

  

}
