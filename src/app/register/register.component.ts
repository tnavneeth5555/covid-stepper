import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private hc:HttpClient,private route:Router) { }
  
  ngOnInit() {
  }
  onSubmit(user)
  {
    var a;
    if (user.is_merchant==""){
      user.is_merchant=false
    }
    console.log(user);
   
                this.hc.post("https://stepperr.herokuapp.com/users/register",user).subscribe((res)=>{
                  a=res;
                  console.log("yes");
                  console.log(res);
                  
                  if (a.message=='0'){
                    alert(["email already exists"])
                  }
                  else{
                    alert(["succesfully registered"])
                    console.log(a.n)
                    this.route.navigate(['login']);
                  }
                },(err)=>{
                  console.log("err",);
                  if (err.error.message==0){
                    alert(["enter All details correctly"])
                  }
                })
    
  }
}
