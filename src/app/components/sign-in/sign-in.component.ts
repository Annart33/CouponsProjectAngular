import { Component, OnInit } from '@angular/core';
import { SignINService } from 'src/app/services/sign-in.service';
import { UserDetails } from 'src/app/models/userDetails';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public userDetails: UserDetails = new UserDetails();

  private company: Company = new Company();
  

  constructor(private signInService: SignINService, private router: Router) { }

  ngOnInit() {
  }

  public setCustomer() : void{
    this.userDetails.setCustomer();
  }
  public setCompany() : void {
    this.userDetails.setCompany();
  }

  public login(): void {
      let observable = this.signInService.singIn(this.userDetails);
      observable.subscribe(id => {
        if (this.userDetails.userType == "CUSTOMER") {
          this.router.navigate(["/home"]);
          sessionStorage.setItem("userType", "CUSTOMER");
          sessionStorage.setItem("id", JSON.stringify(id));
          location.reload();
        }
        else if (this.userDetails.userType == "COMPANY") {
          this.router.navigate(["/home"]);
          sessionStorage.setItem("userType", "COMPANY");
          sessionStorage.setItem("id", JSON.stringify(id));
          location.reload();
        }
      }, error => { 
       
        alert("Email or password Invalid");
      });
    }
  

  

}
