import { Component } from '@angular/core';

@Component({
  selector: 'app-bussinesmanagment',
  templateUrl: './bussinesmanagment.component.html',
  styleUrls: ['./bussinesmanagment.component.css']
})
export class BussinesmanagmentComponent {

  options={
    "For business owners":[
      'Access exclusive business rates',
      'Save up to 20% on bookings with the Genius loyalty programme',
      'Get complimentary 24/7 travel support for all employees',
      'Have full visibility of your companys travel spend',
      'Ensure employee safety with the traveller safety map',
    ],
    'For bookers and planners':[
      'Manage multiple bookings with ease for all travellers',
      'Book flights, accommodation and car rental in one place',
      'Get complimentary 24/7 travel support',
      'Have a full, detailed overview of travellers itineraries',
      'Book accommodation for groups up to 30 people',
    ],
    'For travellers':[
      'Get complimentary 24/7 travel support',
      'Earn loyalty points with hotels, airlines and car rental companies',
      'Read 232 million verified guest reviews',
      'Get personalised recommendations based on your previous bookings',
      'Earn rewards with the Genius loyalty programme'
    ]
  }


  Return(){
    return Object.entries(this.options)
  }
}
