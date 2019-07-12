
export enum CouponType {
    VACATION,
    FOOD,
    ELECTRICITY
  }

export class Coupon{
  static setCouponId(currentCouponId: number): any {
    throw new Error("Method not implemented.");
  }
  static setCompanyId(currentCouponCompanyId: number): any {
    throw new Error("Method not implemented.");
  }

    public constructor(
        public couponId?: number, 
        public couponTitle?: string, 
        public couponPrice?: number, 
        public couponMessage?: string,
        public couponType?: CouponType,
        public couponStartDate?: string,
        public couponEndDate?: string,
        public couponAmount?: number,
        public couponImage?: string,
        public companyId?: number

                ){}
 

    //    public setElectricityCoupon(){
    //       this.couponType = CouponType.ELECTRICITY.toString();   
    // }
    //     public setFoodCoupon(){
    //         this.couponType = JSON.stringify(CouponType.FOOD);
    //     }

    //     public setVacationCoupon(){
    //         this.couponType = "VACATION";
    //     }


        public setCompanyId(companyId: number){
            this.companyId=companyId;
        }

        public setCouponId(couponId: number){
            this.couponId=couponId;
        }

        public setCouponImage(couponImage: string){
            this.couponImage=couponImage;
        }






        
    }