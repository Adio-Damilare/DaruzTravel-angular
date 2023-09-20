import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  tabs=['Solutions','Pricing','Resources','Costumers','Careers']
  constructor(private route:Router){

  }

  Nav(link:string):void{
    this.route.navigate([link])
  }

}
