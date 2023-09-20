import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  options={
    "Solutions":[
      'Business travel management',
      'Offset carbon Footprint',
      'Flexible travel',
      'Travelperk sustainability policy',
      'Pricing',
      'Security',
      
    ],
    'Resources':[
      'Corparate travel resources',
      'Corparate travel Glossary',
      'For travel managers',
      'For finance team',
      'For Travellers',
      'Thought from Travelperk',
      'Blog',
    ],
    'About':[
      'Company',
      'Careers #Hiring',
      "Customer",
      "Users reviews",
      "Press",
      "integration",
      'Privacy center'
    ],
    'Contact':[
      'Contact',
      'Help center'
    ]
  }


  Return (){
    return Object.entries(this.options)
  }
}
