import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order:boolean=false;
  public products : any = [];
  public grandTotal !: number;


  constructor(private cartService:CartService) { }


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

 

  

}
