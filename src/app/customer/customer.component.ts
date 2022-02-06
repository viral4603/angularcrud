import { Component, OnInit } from '@angular/core';
import { Customer } from './model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer:object ={};
  constructor() { }

  ngOnInit(): void {
    console.log(this.customer)
  }
  saveDataToParent(data:object){
    debugger
      this.customer =data;
  }

}
