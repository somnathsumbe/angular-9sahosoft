import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compsubchild1Component } from './compsubchild1.component';

describe('Compsubchild1Component', () => {
  let component: Compsubchild1Component;
  let fixture: ComponentFixture<Compsubchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compsubchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compsubchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
