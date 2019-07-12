import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerRegisterService } from 'src/app/services/customer-register.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  private customer: Customer = new Customer();
  


  constructor(private customerRegisterService: CustomerRegisterService, private router: Router) { }
  

  ngOnInit() {
  }

  register(): void{
    let observable = this.customerRegisterService.registerCustomer(this.customer);
    observable.subscribe(userCustomer => {
      this.router.navigate(["/signIn"]);
    // sessionStorage.setItem("userType", "CUSTOMER");
    location.reload();
   // sessionStorage.setItem("id", JSON.stringify(this.customer.customerId));
    // this.cookieService.set("userType", "COMPANY" );
  });
}


}
 
