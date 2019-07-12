import { Component, OnInit } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';
import { Coupon } from 'src/app/models/coupons';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.css']
})
export class CouponUpdateComponent implements OnInit {

  public coupon: Coupon = new Coupon();
  // private editedCoupon: Coupon = new Coupon();

  constructor(private couponsService: CouponsService) { }

  ngOnInit() {
    var couponId = Number(sessionStorage.getItem("couponId"));
    this.coupon.setCouponId(couponId);
    var currentCouponCompanyId = Number(sessionStorage.getItem("id"));
    this.coupon.setCompanyId(currentCouponCompanyId);
    var currentCouponImage = sessionStorage.getItem("couponImage");
    this.coupon.setCouponImage(currentCouponImage);
    let observable = this.couponsService.getCouponByCouponId(couponId);
    observable.subscribe(currentCoupon => {
    this.coupon = currentCoupon;
    });
  
  }

  update(): void{
    let observable = this.couponsService.editCoupon(this.coupon);
    observable.subscribe(couponToUpdate => {
    alert ("Updated Successfully");
    location.reload();
    });
  }

}
