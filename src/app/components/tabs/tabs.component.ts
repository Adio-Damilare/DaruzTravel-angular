import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit,OnChanges,OnDestroy {
  active=0;
  index=0;
  interval:any;
  public tabs={
    "Business Travelers":[
      'Book your entire trip, in one place',
      'Cancel anything, anytime',
      'Enjoy ultimate travel flexibility'
    ],
    'Travel Managers':[
      'Save time and stay in control',
      'Achieve full travel policy compliance',
      'View & track travel data in real-time'
    ],
    'Financial Controllers':[
      'Save money with negotiated rates',
      'Get all your invoices in one place',
      'Flexible reporting in just a few clicks'
    ]
  }

  Return(){
    return Object.entries(this.tabs)
  }


  ngOnInit():void{
    if(window.screen.availWidth>834){
      this.interval=setInterval(()=>{
        console.log("hello")
        if(this.index==3){
          this.active=this.active==2?0:this.active+=1
          this.index=0
          return
        }
        this.index+=1
      },8000)
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
      
  }
  ngOnDestroy(): void {
      clearInterval(this.interval)
  }

  
  partners=[1,2,3,4,5,6,7,8,9]



}
