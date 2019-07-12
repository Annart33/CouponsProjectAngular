import { Component, OnInit } from '@angular/core';
import { CouponsService } from 'src/app/services/coupons.service';
import { ActivatedRoute } from '@angular/router';
import { Coupon, CouponType } from 'src/app/models/coupons';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public coupon: Coupon;
  private couponType: CouponType;

  public allCoupons = new Array<Coupon>();

  customerLoggedIn = false;
  companyLoggedIn = false;
  notLoggedIn = false;


  constructor(private activatedRoute: ActivatedRoute, private couponsService: CouponsService) { }

  ngOnInit() {
    let ob = this.couponsService.getCouponByCouponType(CouponType.FOOD);
    ob.subscribe(couponsListFromServer => {
      this.allCoupons = couponsListFromServer;
     
    });
    if (sessionStorage.getItem("userType") == "CUSTOMER") {
      this.customerLoggedIn = true;
    }
    else if (sessionStorage.getItem("userType") == "COMPANY") {
      this.companyLoggedIn = true;
    }
    else { this.notLoggedIn = true;
    }

  }

  purchaseCouopn(couponId: number): void {
    let observable = this.couponsService.purchase(couponId);
    observable.subscribe(Coupon => {
      alert("Coupon Has Been Purchased");
    });
  }



}
