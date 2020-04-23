import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compsubchild3Component } from './compsubchild3.component';

describe('Compsubchild3Component', () => {
  let component: Compsubchild3Component;
  let fixture: ComponentFixture<Compsubchild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compsubchild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compsubchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
