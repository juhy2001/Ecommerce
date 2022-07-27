import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;

  constructor(private wishlistService: WishlistService) { }


  ngOnInit(): void {
    this.wishlistService.getProducts()
    .subscribe((res:any)=>{
      this.products = res;
      // console.log("hi",this.products)
      this.grandTotal = this.wishlistService.getTotalPrice();
    })
// const a=this.cartService.getProducts()
// console.log(a)
  }
  removeItem(item: any){
    this.wishlistService.removeCartItem(item);
  }
  emptycart(){
    this.wishlistService.removeAllCart();
  }

}
