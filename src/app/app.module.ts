import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ChildGalleryComponent } from './child-gallery/child-gallery.component';
import { PreweddingGalleryComponent } from './prewedding-gallery/prewedding-gallery.component';
import { OtherGalleryComponent } from './other-gallery/other-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    ChildGalleryComponent,
    PreweddingGalleryComponent,
    OtherGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
