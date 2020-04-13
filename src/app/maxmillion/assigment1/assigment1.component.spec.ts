import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigment1Component } from './assigment1.component';

describe('Assigment1Component', () => {
  let component: Assigment1Component;
  let fixture: ComponentFixture<Assigment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assigment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assigment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
