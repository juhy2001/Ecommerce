import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // products='https://fakestoreapi.com/products'
  // products='assets/products.json';
  // products='https://course-api.com/react-store-products'
  products='http://localhost:3001/products'
  users='assets/user.json';
  register='http://localhost:3001/register'
  

  constructor(private http:HttpClient) { }

  // getAllProducts(): Observable<any>{
  //   return this.http.get(this.products);

  // }

  // getProduct(){
  //   return this.http.get<any>("https://fakestoreapi.com/products")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

 
  getProduct():Observable<any>{
    return this.http.get(this.products )
  }

  login():Observable<any>{
    return this.http.get(this.users)
  }

  signUp(data:any):Observable<any>{
    return this.http.post<any>(this.register,data)
  }

  postProducts(data:any):Observable<any>{
    return this.http.post<any>(this.products,data)
  }
}
