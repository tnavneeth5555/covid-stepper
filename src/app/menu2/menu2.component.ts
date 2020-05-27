import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  orders=[]
  constructor(private apollo:Apollo) { }

  ngOnInit() {
    var id=localStorage.getItem("id")
    console.log(id)
    this.apollo.query({
      query: gql`query{
        mer_orders(mer_id:"${id}"){
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
    for (var i in res["data"]["mer_orders"]){
      console.log(res["data"]["mer_orders"][i])
      this.orders.push(res["data"]["mer_orders"][i])
    }
    console.log(this.orders)
   });
  
    





  }

}
