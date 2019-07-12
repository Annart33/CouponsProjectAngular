import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegisterService {

  
  constructor(private http: HttpClient) {}
   
  public registerCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8080/CouponsMavenProjectSpring/rest/customers", customer,{withCredentials:true});
    
  }
}