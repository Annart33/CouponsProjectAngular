import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public userType: String;

  customerLoggedIn = false;
  companyLoggedIn = false;

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem("userType") == "CUSTOMER") {
      this.customerLoggedIn = true;
    }
    else if (sessionStorage.getItem("userType") == "COMPANY") {
      this.companyLoggedIn = true;
    }
  }
}
