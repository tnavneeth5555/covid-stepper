import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {
orders=[]
c=false
  constructor(private apollo:Apollo) { }

  ngOnInit() {
    var id=localStorage.getItem("id")
    var d=" "+new Date(Date.now()).toDateString()+" "
    var t= new Date(Date.now()).getHours()
    console.log(d)
    this.apollo.query({
      query: gql`query{
        current_orders(mer_id:"${id}",date:"${d}",time:${t}){
          cus_name
          _id
          cus_ph
          gender
          age
          date
          time
        }
      }`
   }).subscribe(res => {
     console.log(res)
    for (var i in res["data"]["current_orders"]){
      console.log(res["data"]["current_orders"][i])
      this.orders.push(res["data"]["current_orders"][i])
    }
    console.log(this.orders)
   });


   if ((this.orders.length)==0){
     this.c=true
   }
console.log(this.c)
  }

}
