import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../model/customer';
import { CustomerOperationService } from '../services/customer-operation.service';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
 customerlist:Customer[] =[];
 @Output() listCustomer:EventEmitter<object> = new EventEmitter;
  customerForm={} as FormGroup;
  constructor(private formbuilder:FormBuilder,private services:CustomerOperationService) {

   }

  ngOnInit(): void {
    this.customerForm = this.creatCustomerFormGroup();
    this.getCustomerList();
  }
//creat from grup that access all value
  creatCustomerFormGroup():FormGroup{
    return this.formbuilder.group({
      firstname :['',Validators.required],
      lastname :[''],
      email :[''],
      phone :[null],
      gender:[''],
      date:[null],
      category:['']
    })
  }
  //save data to customer
  saveCustomerData(){ 
    if(this.customerForm['status']==='INVALID'){
      alert('data invalid');
    }else{
      this.services.saveCustomer(this.customerForm.value).subscribe(data=>{
        alert('data upload succesfully');
      });
    }
  }

  getCustomerList(){
      this.services.getAllCustomerDetails().subscribe((data:Customer[])=>
      this.customerlist = data);

  }
  //return form controls
  get formControl(){
    return this.customerForm.controls;    
  }

}
