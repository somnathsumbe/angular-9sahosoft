import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosearchComponent } from './photosearch.component';

describe('PhotosearchComponent', () => {
  let component: PhotosearchComponent;
  let fixture: ComponentFixture<PhotosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
