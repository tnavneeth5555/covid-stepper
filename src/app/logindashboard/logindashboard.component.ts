import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {
  a={}
  booking_mer_id:String
  shop=[]
  constructor(private hc:HttpClient,public ls:LoginService,private route:Router) { }

  ngOnInit() {
    
    this.hc.get('https://stepper-store.herokuapp.com/stores').subscribe((res)=>{
      var k=Object.keys(res).length
      for (var i=k-1;i>-1;i--){
        var temp=[]
        
        temp.push(res[i].shopname)
        temp.push(res[i].busname)
        temp.push(res[i].shopdesc)
        temp.push(res[i].merchent_id)
        temp.push(res[i].address)
        temp.push(res[i].ownname)
        temp.push(res[i].shopcontact)
        console.log(temp)
        this.shop.push(temp)
      }
      this.a=res[0];
      console.log(res)
      console.log(this.a)         
    },(err)=>{
      console.log("error",err)
      
    });
  }


}
