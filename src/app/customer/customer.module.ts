import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerlistComponent,
    CustomerformComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomerComponent,
    CustomerlistComponent
  ]
})
export class CustomerModule { }
