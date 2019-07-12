import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public userType: String;

  customerLoggedIn = false;
  companyLoggedIn = false;
  notLoggedIn = false;

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem("userType") == "CUSTOMER") {
      this.customerLoggedIn = true;
    }
    else if (sessionStorage.getItem("userType") == "COMPANY") {
      this.companyLoggedIn = true;
    }
    else {
      this.notLoggedIn = true;
    }
  }
}


