import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private hc:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(items){
    var x,i,p
    console.log(items)
    i=[]
    p=[]
    var c
    c=0
    for (var key in items)
     {
      if ((items).hasOwnProperty(key))
       {
        var val = items[key];
        if (val!=null && val!=""){
                    if (c%2==0){
                      i.push(val)
                    }
                    else{
                      p.push(val)
                    }
                    c=c+1
      }
        }
      }
    console.log(i,p)
    var a={
      id:localStorage.getItem("busid"),
      items:i,
      price:p
    }
    console.log(a)
    this.hc.post('/quickbuybus/additem',a).subscribe((res)=>{
      console.log("working")
      if (res=="1"){
        alert(["Items added Successfully!"]);
      }
    })
  }
showitems(){
  var a={
    id:localStorage.getItem("busid")
  }
  this.hc.post('/quickbuybus/showitem',a).subscribe((res)=>{
    console.log(res)
    
  })
}
}
