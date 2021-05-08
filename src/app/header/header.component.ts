import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScrolled=false;
  constructor() { }

  ngOnInit(): void {
  }

  changeStyle(){
    this.isScrolled=!this.isScrolled;
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
