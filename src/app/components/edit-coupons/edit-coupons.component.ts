import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupons';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-edit-coupons',
  templateUrl: './edit-coupons.component.html',
  styleUrls: ['./edit-coupons.component.css']
})
export class EditCouponsComponent implements OnInit {

  private coupon: Coupon;

  private allCoupons = new Array<Coupon>();


  customerLoggedIn = false;
  companyLoggedIn = false;
  notLoggedIn = false;


  constructor(private activatedRoute: ActivatedRoute, private couponsService: CouponsService, private router: Router) { }

  ngOnInit() {
    var companyId = Number(sessionStorage.getItem("id"));
    let ob = this.couponsService.getCouponByCompanyId(companyId);
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

  update(couponId: number): void {
    sessionStorage.setItem("couponId", JSON.stringify(couponId));
    sessionStorage.setItem("couponImage", "Image");
    this.router.navigate(["/update"]);
    }

    delete(couponId: number): void{
      let ob = this.couponsService.deleteCoupon(couponId);
      ob.subscribe(couponToDelete => {
        this.coupon = couponToDelete;
      });
      location.reload();

    }
  }
