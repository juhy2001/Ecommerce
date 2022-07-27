import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result!:any;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  newObject:any


  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.apiService.login().subscribe(res=>{
      // console.log(res)
    })
  }

  login(){
    this.apiService.login().subscribe((res)=>{
      this.result=res.users;
      // console.log(this.result)
  
      // console.log(Array(this.result))
      const user= this.result.find((a:any)=>{
        console.log("a",a)
        return a.email=== this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      console.log("user",user)
      
      localStorage.setItem('loginInfo', JSON.stringify(user));


      // localStorage.setItem("myObject", JSON.stringify(user));

      if(user){
        
        // this.loginForm.reset();
        this.router.navigate(['home'])
        // localStorage.setItem('loginInfo',user)
        localStorage.setItem('email',this.loginForm.value.email)
        console.log(localStorage)
        alert('Login is success');
      }else{
        alert("User not found")
      }
    },err=>{
      alert("Something went wrong")
    }
    )
  }

}
