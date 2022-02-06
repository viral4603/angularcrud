import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerformComponent } from './customer/customerform/customerform.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';

const routes: Routes = [
  {path:'',redirectTo:'customer',pathMatch:'full'},
  {path:'customer',loadChildren:() =>import('./customer/customer.module').then(child =>child.CustomerModule)}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
