import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  orders=[]
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    var id=localStorage.getItem("id")
    this.apollo.query({
      query: gql`query{
        orders(cus_id:"${id}") {
          _id
          mer_name
          mer_address
          mer_ph
          date
          time
        }
      }`
    }).subscribe(res => {
      console.log(res["data"]["orders"])
      for (var i in res["data"]["orders"]){
        console.log(res["data"]["orders"][i])
        this.orders.push(res["data"]["orders"][i])
      }
    }); 
  }

}
