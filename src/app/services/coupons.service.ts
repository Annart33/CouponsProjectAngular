import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coupon, CouponType } from '../models/coupons';



@Injectable({
  providedIn: 'root'
})


export class CouponsService {


  

  constructor(private http: HttpClient) { }

  
  public getAllCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons",{withCredentials:true});
  }

  public getCouponByCouponType(couponType: CouponType): Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons/byCouponType/"+CouponType[couponType], {withCredentials:true});
  }

  public getCouponByCompanyId(companyId: number): Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons//byCompanyId/"+companyId, {withCredentials:true});
  }
  
  
  public getCouponByCouponId(couponId: number): Observable<Coupon>{
    return this.http.get<Coupon>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons/" +couponId,{withCredentials:true});
  }
  
  public addCoupon(coupon: Coupon): Observable<Coupon>{
    return this.http.post<Coupon>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons", coupon,{withCredentials:true});  
  }
  
  public purchase(couponId: number): Observable<Coupon>{
    return this.http.post<Coupon>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons/purchase/" + couponId, new Coupon(),{withCredentials:true});  
  }
  
  public editCoupon(coupon: Coupon): Observable<Coupon>{
    return this.http.put<Coupon>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons", coupon,{withCredentials:true});  
  }

  public deleteCoupon(couponId: number): Observable<Coupon>{
    return this.http.delete<Coupon>("http://localhost:8080/CouponsMavenProjectSpring/rest/coupons/byCouponId/"+couponId, {withCredentials:true});  
  }

  
  
  
  
  
}
