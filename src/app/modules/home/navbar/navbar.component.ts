import { WishlistService } from './../../../services/wishlist.service';
import { ApiService } from './../../../services/api.service';
import { CartService } from 'src/app/services/cart.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  totalItem:any
  totalItems:any

  retrievedObject:any;
  role:any;

  addProductForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    company: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private cartService: CartService,private apiService:ApiService,private wishlistService:WishlistService, private router:Router) { }

  ngOnInit(): void {
    this.retrievedObject = localStorage.getItem('loginInfo');
    // this.role=this.retrievedObject.role
  

    this.retrievedObject= JSON.parse(this.retrievedObject);
    console.log("hi",this.retrievedObject)
    this.role=this.retrievedObject.role
    console.log(this.role)
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      this.totalItem = res.length;
      
    })

    this.wishlistService.getProducts()
    .subscribe((res:any)=>{
      this.totalItems = res.length;
      
    })
    
  }

  addProduct(){
    this.apiService.postProducts(this.addProductForm.value).subscribe((res)=>{
      console.log(res)
    })
    console.log(this.addProductForm.value)
  }

  onLogout() {
    console.log("hi")
    localStorage.removeItem('loginInfo');
    // localStorage.clear();
    this.router.navigate(['login']);

  //   this.authService.logout().subscribe( s => {
  //       this.route.navigate(['login']);
  //  });
  }

  

  

}
