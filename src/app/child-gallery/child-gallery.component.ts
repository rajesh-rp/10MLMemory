import { Component, OnInit } from '@angular/core';
import { Router,Route,ActivatedRoute,NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-child-gallery',
  templateUrl: './child-gallery.component.html',
  styleUrls: ['./child-gallery.component.css']
})
export class ChildGalleryComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
  }
  showPhoto(event:Event){
    //  let elementId: any = (event.target as Element).getAttribute("href");
    // //  this.router.navigate([elementId],{ relativeTo: this.route  });
    //  this.router.navigate(['child_gallery'+elementId]);
  }
  
}
