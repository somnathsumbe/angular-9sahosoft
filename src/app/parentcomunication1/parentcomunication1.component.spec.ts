import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcomunication1Component } from './parentcomunication1.component';

describe('Parentcomunication1Component', () => {
  let component: Parentcomunication1Component;
  let fixture: ComponentFixture<Parentcomunication1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentcomunication1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentcomunication1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
