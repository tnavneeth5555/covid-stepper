import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { LoginService } from '../loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private hc:HttpClient,private ls:LoginService,private route:Router) { }

  ngOnInit() {
  
  }
  onSubmit(userobj){
    var a;
    console.log(userobj)
  this.ls.loginuser(userobj).subscribe((res)=>{
    a=res;
    console.log(res)
    if (a.message=='1'){
      alert(["you are successfully logged in!"]);
      this.ls.isLoggedIn=true;
      if (res["is_merchant"]==true){
      this.ls.ismerchant=true
      }
      console.log(res["token"])
      localStorage.setItem("token",res["token"])
      localStorage.setItem("id",res["id"])
      localStorage.setItem("name",res["name"])
      localStorage.setItem("is_merchant",res["is_merchant"])
      if (a.is_merchant==false){
        this.route.navigate(['logindashboard'])
      }
      else{
        this.route.navigate(['merchantdashboard'])
      }
      console.log("logeed in?",this.ls.isLoggedIn)
    }
  },(err)=>{
    console.log(err.error)
    alert(["Invalid credentials!"]);
}    
   
  )
  }
}
