import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-merchantdashboard',
  templateUrl: './merchantdashboard.component.html',
  styleUrls: ['./merchantdashboard.component.css']
})
export class MerchantdashboardComponent implements OnInit {

  constructor(private hc:HttpClient,private route:Router) { }

  ngOnInit() {
  }
  
}
