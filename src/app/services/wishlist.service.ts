import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  
  public wishList : any =[]
  public productsList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productsList.asObservable();

  }

  setProduct(product : any){
    this.wishList.push(...product);
    this.productsList.next(product);
  }
  addtoCart(product : any){
    this.wishList.push(product);

  
    this.productsList.next(this.wishList);
    this.getTotalPrice();
    console.log(this.wishList)
    localStorage.setItem('cartItems', JSON.stringify(this.wishList));
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.wishList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.wishList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.wishList.splice(index,1);
      }
    })
    this.productsList.next(this.wishList);
  }
  removeAllCart(){
    this.wishList = []
    this.productsList.next(this.wishList);
  }
}
