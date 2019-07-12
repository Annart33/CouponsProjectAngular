import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/userDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegisterService {

  
  constructor(private http: HttpClient) {}
   
  public registerCompany(company: Company): Observable<Company>{
    return this.http.post<Company>("http://localhost:8080/CouponsMavenProjectSpring/rest/companies", company,{withCredentials:true});
  }
}
