// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CouponsService } from 'src/app/services/coupons.service';
// import { Coupon } from 'src/app/models/coupons';

// @Component({
//   selector: 'app-one-coupon',
//   templateUrl: './one-coupon.component.html',
//   styleUrls: ['./one-coupon.component.css']
// })
// export class OneCouponComponent implements OnInit {


//   private coupon: Coupon;

//   constructor(private activatedRoute: ActivatedRoute, private couponsService: CouponsService, private response: Response) { }

//   ngOnInit() {
//     const id = parseInt(this.activatedRoute.snapshot.params.id);
//     let ob = this.couponsService.getAllCoupons();
//     ob.subscribe(coupons=> { 
//     console.log(this.coupon);
//     });
//   }

// }
