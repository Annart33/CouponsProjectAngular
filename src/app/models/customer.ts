export class Customer {
    public constructor(
        public customerId?: number,
        public customerName?: string,
        // public firstName?: string,
        // public lastName?: String,
        public customerPassword?: string,
        public customerEmail?: string,
    ) {         
    }


    public setCustomerId(customerId: number){
        this.customerId=customerId;
    }
    }