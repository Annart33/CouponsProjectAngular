import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatc-us',
  templateUrl: './contatc-us.component.html',
  styleUrls: ['./contatc-us.component.css']
})
export class ContatcUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send():void{
    alert("Thank you for leaving a message, we will contact you shortly");
  location.reload();
  }
  

}
