import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
 public wishlist:any
 color:any;
 


  constructor(private apiService:ApiService, private cartService:CartService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.apiService.getProduct()
    .subscribe(res=>{
      this.productList = res;
      // console.log("hi",this.productList)
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
 
        Object.assign(a,{quantity:1,total:a.price});

        // console.log(Object.assign(a,{quantity:1,total:a.price}))
      });
      // console.log(this.productList)
    });


    // -----------------------------------


    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.wishlist = res;
      // console.log("hi",this.productList)
      this.filterCategory = res;
      this.wishlist.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
 
        Object.assign(a,{quantity:1,total:a.price});

        // console.log(Object.assign(a,{quantity:1,total:a.price}))
      });
      // console.log(this.productList)
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
    // console.log(item)
  }

  addtowish(item:any){
    this.wishlistService.addtoCart(item);
  
      item.isSelected = true;
  
    
  }



}
