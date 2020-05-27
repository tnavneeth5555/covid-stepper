import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-menu6',
  templateUrl: './menu6.component.html',
  styleUrls: ['./menu6.component.css']
})
export class Menu6Component implements OnInit {
  
   bussiness

  constructor(private hc:HttpClient,private route:Router) { }

  ngOnInit() {
    console.log("working")
    
      var email
      email=localStorage.getItem("email")
      var abc={email:email}
      console.log(email)
      this.hc.post("/quickbuy/getallbussiness",abc).subscribe((res)=>{
        console.log(res)
        this.bussiness=res["allbussiness"]
        console.log(this.bussiness);
      })
  }
 
addid(id){
  console.log(id)
  localStorage.setItem("busid",id);
  this.route.navigate(['additem'])
}


  deleteb(id){
    console.log("yAAAAAAAAAAAAAAAAAAA")
    console.log(id)
    var k;
    k={
      "id":id
    }
    console.log(k)
    this.hc.post("/quickbuy/deletebussiness",k).subscribe((res)=>{
      console.log(res)
      if (res=="1"){
        alert(["successfully deleted !! refresh the page."]);
      }
    })
  }
}
