export class UserDetails {
    public constructor(
        public id?: number,
        public email?: string,
        public password?: string,
        public userType?: string
        ) { 
        }
        
        public setCompany(){
            this.userType="COMPANY";
        }

        public setCustomer(){
            this.userType="CUSTOMER";
        }

        public getUserType(){
            return this.userType;
        }


    }