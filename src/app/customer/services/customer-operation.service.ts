import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category, Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerOperationService {
  id:string ='';
  url:string = environment.baseURL;

  constructor(private https:HttpClient) { }
  //this method is user for insert userdata into database
  saveCustomer(data:Customer):Observable<Customer[]>{
    return this.https.post<Customer[]>(`${this.url}/customer`,data);
  }
  getCustomerCategaries():Observable<category>{
    return this.https.get<category>(`${this.url}/categories`)
  }
  //get all customer information
  getAllCustomerDetails():Observable<Customer[]>{
    return this.https.get<Customer[]>(`${this.url}/customer`)
  }
  //update some field of customer
  updateCustomer(data:Customer):Observable<Customer>{
    return this.https.put<Customer>(`${this.url}/customer/${this.id}`,data)
  }
  //delete customer
  deleteCustomer(id:number):Observable<number>{
    return this.https.delete<number>(`${this.url}/customer/${this.id}`)
  }



}
