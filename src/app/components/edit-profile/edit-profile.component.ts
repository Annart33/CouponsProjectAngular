import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';
import { Customer } from 'src/app/models/customer';
import { Company } from 'src/app/models/company';
// import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  private company: Company = new Company();
  private customer: Customer = new Customer();
  private companyLoggedIn = false;
  private customerLoggedIn = false;

  constructor(private editService: EditService) { }

  ngOnInit() {
    if (sessionStorage.getItem("userType") == "COMPANY") {
      this.companyLoggedIn = true;
      var id = Number(sessionStorage.getItem("id"));
      this.company.setCompanyId(id);
      let observable = this.editService.getCompany(id);
      observable.subscribe(currentCompany => {
      this.company = currentCompany;
      });
  }
  else if  (sessionStorage.getItem("userType") == "CUSTOMER"){
    this.customerLoggedIn = true;
    var id = Number(sessionStorage.getItem("id"));
    this.customer.setCustomerId(id);
    let observable = this.editService.getCustomer(id);
    observable.subscribe(currentCustomer => {
    this.customer = currentCustomer;
    });
  }
  else alert ("ERROR: You can not upate profile if you are not logged in")

}

  editCustomer(): void{
    let observable = this.editService.editCustomer(this.customer);
    observable.subscribe(customerUpdate => {
    alert ("Updated Successfully");
    location.reload();
    });
 
  }

  editCompany(): void{
    let observable = this.editService.editCompany(this.company);
    observable.subscribe(companyUpdate => {
    alert ("Updated Successfully");
    location.reload();
    });
  }



}
