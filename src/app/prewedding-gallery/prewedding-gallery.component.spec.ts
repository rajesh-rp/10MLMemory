import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreweddingGalleryComponent } from './prewedding-gallery.component';

describe('PreweddingGalleryComponent', () => {
  let component: PreweddingGalleryComponent;
  let fixture: ComponentFixture<PreweddingGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreweddingGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreweddingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
