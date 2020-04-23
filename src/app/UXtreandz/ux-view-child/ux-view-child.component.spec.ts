import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxViewChildComponent } from './ux-view-child.component';

describe('UxViewChildComponent', () => {
  let component: UxViewChildComponent;
  let fixture: ComponentFixture<UxViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
