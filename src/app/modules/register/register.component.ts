import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  success:boolean=false;

  signUpUser = new FormGroup(
    {
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl(''),
    }
  );


  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    console.log(this.signUpUser.value)
    this.apiService.signUp(this.signUpUser.value).subscribe((res)=>{

      
      
      // alert("User is registered successfully")
      // this.router.navigate(["login"])
      this.success=true;
      console.log(res)
    })
  }

}
