import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherGalleryComponent } from './other-gallery.component';

describe('OtherGalleryComponent', () => {
  let component: OtherGalleryComponent;
  let fixture: ComponentFixture<OtherGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
