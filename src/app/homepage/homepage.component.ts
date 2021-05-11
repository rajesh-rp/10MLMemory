import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  show = true;
  screenWidth: any;
  addClass = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  
  goToChild(){
    this.router.navigate(['/child_gallery']);
  }

  goToPrewedding(){
    this.router.navigate(['/prewedding_gallery']);
  }

  goToOther(){
    this.router.navigate(['/other_gallery']);
  }
  
  
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    if (this.screenWidth < 1302) {
      this.show = false;
      this.addClass = true;
    }
    else {
      this.show = true;
      this.addClass = false;
    }
  }


}
