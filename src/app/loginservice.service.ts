import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Router } from '@angular/router';

import {BookslotComponent} from './bookslot/bookslot.component';

import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient,private route:Router) { 
    
  }
  isLoggedIn : boolean=false;
  ismerchant : boolean;
  loginuser(userobj):Observable<any>
  {
    console.log("working",this.isloggedIn())
    
    return this.hc.post("https://stepperr.herokuapp.com/users/login",userobj);
    
  }
  logout()
  {
    console.log("working",this.isloggedIn())
    localStorage.clear();
    this.isLoggedIn=false;
    this.route.navigate(['home'])
  }
  isloggedIn()
  {
    return !!localStorage.getItem("token");
  }
  ismer(){
    console.log("inmeschant",localStorage.getItem("is_merchant"))
    if (localStorage.getItem("is_merchant")=="true"){
      return 1
    }
    else{
      return 0
    }
  }
  mer_id:String
  public shopname:String
  busname:String
  shopdesc:String
  addr:String
  own:String
  num:Number
  bookslot(mer_id,shop_name,bus_name,shop_desc,addr,own,ph){
    this.mer_id=mer_id
    this.shopname=shop_name
    this.busname=bus_name
    this.shopdesc=shop_desc
    this.addr=addr
    this.own=own
    this.num=ph
    this.route.navigate(['bookslot'])
  }
}
