import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScrolled=false;
  isClicked=false;
  constructor() { }

  ngOnInit(): void {
  }

  changeStyle(){
    this.isClicked=!this.isClicked;
  }
  
  
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop>70||document.documentElement.scrollTop>70){
      this.isScrolled=true;
    }
    else{
      this.isScrolled=false;
    }
  }

}
