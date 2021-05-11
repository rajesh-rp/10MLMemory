import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGalleryComponent } from './child-gallery/child-gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OtherGalleryComponent } from './other-gallery/other-gallery.component';
import { PreweddingGalleryComponent } from './prewedding-gallery/prewedding-gallery.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'child_gallery',component:ChildGalleryComponent},
  {path:'prewedding_gallery',component:PreweddingGalleryComponent},
  {path:'other_gallery',component:OtherGalleryComponent},
  {path:'*',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
