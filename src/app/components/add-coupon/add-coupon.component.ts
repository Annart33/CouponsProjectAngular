import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { CouponsService } from 'src/app/services/coupons.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  coupon: Coupon = new Coupon();

  constructor(private couponsService: CouponsService, private cookieService: CookieService) { }

  ngOnInit() { 
    }


  Add(): void {
    var companyId = Number(sessionStorage.getItem("id"));
    this.coupon.setCompanyId(companyId);
    this.coupon.setCouponImage("Image");
    let ob = this.couponsService.addCoupon(this.coupon);
    ob.subscribe(coupon => {
      alert("Added Successfuly");
      location.reload();
    });
 }
}
