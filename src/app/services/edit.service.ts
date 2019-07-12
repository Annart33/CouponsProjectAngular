import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }

  public editCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>("http://localhost:8080/CouponsMavenProjectSpring/rest/customers", customer,{withCredentials:true});
  }

  public editCompany(company: Company): Observable<Company>{
    return this.http.put<Company>("http://localhost:8080/CouponsMavenProjectSpring/rest/companies", company,{withCredentials:true});
  }

  public getCompany(companyId: number): Observable<Company>{
    return this.http.get<Company>("http://localhost:8080/CouponsMavenProjectSpring/rest/companies/getCompany/" + companyId,{withCredentials:true});
  }

  public getCustomer(customerId: number): Observable<Customer>{
    return this.http.get<Customer>("http://localhost:8080/CouponsMavenProjectSpring/rest/customers/getCustomer/"+ customerId,{withCredentials:true});
  }

}
