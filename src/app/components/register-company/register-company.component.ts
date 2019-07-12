import { Component, OnInit } from '@angular/core';
import { CompanyRegisterService } from 'src/app/services/company-register.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  
  private company: Company = new Company();

  constructor(private companyRegisterService: CompanyRegisterService, private router: Router) { }


  ngOnInit() {
  }

  register(): void{
      let observable = this.companyRegisterService.registerCompany(this.company);
      observable.subscribe(company => {
        this.router.navigate(["/signIn"]);
       // sessionStorage.setItem("userType", "COMPANY");
        location.reload();
      //  sessionStorage.setItem("id", JSON.stringify(company.companyId));
      // this.cookieService.set("userType", "COMPANY" );
    });
  }



  
  
}

