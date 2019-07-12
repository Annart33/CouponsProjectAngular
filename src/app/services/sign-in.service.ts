import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/userDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignINService {
 


  constructor(private http: HttpClient) {}
   
  public singIn(userDetails: UserDetails): Observable<UserDetails>{
    return this.http.post<UserDetails>("http://localhost:8080/CouponsMavenProjectSpring/rest/login", userDetails,{withCredentials:true});
  }




}
