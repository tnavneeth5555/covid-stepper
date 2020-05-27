import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  constructor(private hc:HttpClient,private route:Router) { }

  ngOnInit() {
  }
  onSubmit(shopdetails){
  
  var token=localStorage.getItem("token");
  
  var a;
  shopdetails.merchent_id=localStorage.getItem("id");

  console.log(shopdetails)   

        this.hc.post('https://stepper-store.herokuapp.com/stores/addstore',shopdetails).subscribe((res)=>{
          a=res;
          console.log(res)
                      alert(["Succesfully Bussiness Added"]);
        },(err)=>{
          console.log("error",err)
          alert(["Error in Adding bussiness! enter correctly"]);
        });
  }

 
}
