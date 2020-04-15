import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraappComponent } from './cameraapp.component';

describe('CameraappComponent', () => {
  let component: CameraappComponent;
  let fixture: ComponentFixture<CameraappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
