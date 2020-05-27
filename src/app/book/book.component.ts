import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpClient } from '@angular/common/http';

import { LoginService } from '../loginservice.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  Dates={}
  displaydates=[]
  displaytimes=[]
  selecteddate=""
  selectedtime=6
  constructor(private hc:HttpClient,private apollo: Apollo,public ls:LoginService ){ }

  ngOnInit(): void {
    this.Dates=[]
    var date1=new Date(Date.now()).toDateString()
    var date2=new Date(Date.now()+86400000).toDateString()
    var date3=new Date(Date.now()+86400000+86400000).toDateString()
    var date4=new Date(Date.now()+86400000+86400000+86400000).toDateString()
    this.selecteddate=date1
    this.displaydates.push(date1,date2,date3,date4)
    date1=date1.toString()
    console.log(date1.toString())
    this.apollo.query({
       query: gql`query{
        gettimes(date: " ${date1} " ) {
          time
        }
      }`
    }).subscribe(res => {
      var t=[]
      var ft=[]
      console.log(res)
      for (var i in res["data"]["gettimes"]){
        console.log(res["data"]["gettimes"][i]["time"])
        t.push(res["data"]["gettimes"][i]["time"])
      }
      for (let i=6;i<24;i++){
        if ((t.filter(y => y === i).length)<10){
          ft.push(i)}
      }
      console.log(ft)
      this.Dates[date1]=ft
      this.displaytimes=ft
      console.log(this.Dates)
      //successfully created vehicle entity.
    });
    this.apollo.query({
      query: gql`query{
       gettimes(date: " ${date2} " ) {
         time
       }
     }`
   }).subscribe(res => {
     var t=[]
     var ft=[]
     console.log(res)
     for (var i in res["data"]["gettimes"]){
       console.log(res["data"]["gettimes"][i]["time"])
       t.push(res["data"]["gettimes"][i]["time"])
     }
     for (let i=6;i<24;i++){
       if ((t.filter(y => y === i).length)<10){
         ft.push(i)}
     }
     console.log(ft)
     this.Dates[date2]=ft
     console.log(this.Dates)
     //successfully created vehicle entity.
   });
   this.apollo.query({
    query: gql`query{
     gettimes(date: " ${date3} " ) {
       time
     }
   }`
 }).subscribe(res => {
   var t=[]
   var ft=[]
   console.log(res)
   for (var i in res["data"]["gettimes"]){
     console.log(res["data"]["gettimes"][i]["time"])
     t.push(res["data"]["gettimes"][i]["time"])
   }
   for (let i=6;i<24;i++){
     if ((t.filter(y => y === i).length)<10){
       ft.push(i)}
   }
   console.log(ft)
   this.Dates[date3]=ft
   console.log(this.Dates)
   //successfully created vehicle entity.
 });
 this.apollo.query({
  query: gql`query{
   gettimes(date: " ${date4} " ) {
     time
   }
 }`
}).subscribe(res => {
 var t=[]
 var ft=[]
 console.log(res)
 for (var i in res["data"]["gettimes"]){
   console.log(res["data"]["gettimes"][i]["time"])
   t.push(res["data"]["gettimes"][i]["time"])
 }
 for (let i=6;i<24;i++){
   if ((t.filter(y => y === i).length)<10){
     ft.push(i)}
 }
 console.log(ft)
 this.Dates[date4]=ft
 console.log(this.Dates)
 //successfully created vehicle entity.
}); 
  }
  onSubmit(bookingdetails){
    console.log(bookingdetails)
    var age=parseInt(bookingdetails.age)
    var mid=this.ls.mer_id;
    var cid=localStorage.getItem("id")
    var mname=this.ls.own;
    var madr=this.ls.addr;
    var mph=this.ls.num;
    this.apollo.mutate({
      mutation: gql`mutation{
        createorder(
              mer_id:"${mid}",
              cus_id:"${cid}",
              mer_name:"${mname}",
              cus_name:"${bookingdetails.name}",
              mer_address:"${madr}",
              cus_ph:"${bookingdetails.contact}",
              mer_ph:"${mph}",
              gender:"${bookingdetails.gender}",
              age:${age},
              date:" ${this.selecteddate} ",
              time:${this.selectedtime}){
          _id
          cus_ph
        }
      }`
    }).subscribe(res => {
     console.log(res)
     alert(["your slot is succesfully booked "])
    });


  }
  datefun(d){
    this.selecteddate=d
    this.displaytimes=this.Dates[d]
    console.log(this.selecteddate)
    console.log(d)
    
  }
  timefun(d){
    this.selectedtime=d
    console.log(this.selectedtime)
    console.log(d)
    
  }
}
