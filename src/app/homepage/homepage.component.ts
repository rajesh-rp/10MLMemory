import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   
  show=true;
  screenWidth:any;
  addClass=false;
  constructor() { }
  
  ngOnInit(): void {
    
  }

  onResize(event:any){
    this.screenWidth=event.target.innerWidth;
    if(this.screenWidth<1302){
      this.show=false;
      this.addClass=true;
    }
    else{
      this.show=true;
      this.addClass=false;
    }
  }
   

}
