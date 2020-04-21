import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionmenegmentComponent } from './sessionmenegment.component';

describe('SessionmenegmentComponent', () => {
  let component: SessionmenegmentComponent;
  let fixture: ComponentFixture<SessionmenegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionmenegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionmenegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
