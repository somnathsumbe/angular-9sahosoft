import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxparentComponent } from './uxparent.component';

describe('UxparentComponent', () => {
  let component: UxparentComponent;
  let fixture: ComponentFixture<UxparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
