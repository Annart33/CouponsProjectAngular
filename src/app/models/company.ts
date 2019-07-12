export class Company {
    public constructor(
        public companyId?: number,
        public companyName?: string,
        public companyEmail?: string,
        public companyPassword?: string,
        // public adress?: string,
        // public phoneNumber?: number,
    ) { }

    public setCompanyId(companyId: number){
        this.companyId=companyId;
    }

}