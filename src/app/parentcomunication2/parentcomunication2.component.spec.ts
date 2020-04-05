import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcomunication2Component } from './parentcomunication2.component';

describe('Parentcomunication2Component', () => {
  let component: Parentcomunication2Component;
  let fixture: ComponentFixture<Parentcomunication2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentcomunication2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentcomunication2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
