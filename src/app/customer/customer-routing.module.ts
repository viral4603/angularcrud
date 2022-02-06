import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

const routes: Routes = [
  {path:'',component:CustomerComponent,
  children:[
    {path:'customerlist',component:CustomerlistComponent},
    {path:'customerform',component:CustomerformComponent}
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
