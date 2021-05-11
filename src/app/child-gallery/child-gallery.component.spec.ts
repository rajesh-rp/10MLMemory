import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildGalleryComponent } from './child-gallery.component';

describe('ChildGalleryComponent', () => {
  let component: ChildGalleryComponent;
  let fixture: ComponentFixture<ChildGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
