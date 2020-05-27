import { Component, OnInit } from '@angular/core';

import { LoginService } from '../loginservice.service';
@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {

  constructor(public ls:LoginService) { }

  ngOnInit(): void {
    
  }

}
