import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-gallery',
  templateUrl: './other-gallery.component.html',
  styleUrls: ['./other-gallery.component.css']
})
export class OtherGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }


}
