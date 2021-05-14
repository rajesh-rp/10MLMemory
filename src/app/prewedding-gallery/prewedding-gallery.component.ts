import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prewedding-gallery',
  templateUrl: './prewedding-gallery.component.html',
  styleUrls: ['./prewedding-gallery.component.css']
})
export class PreweddingGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
