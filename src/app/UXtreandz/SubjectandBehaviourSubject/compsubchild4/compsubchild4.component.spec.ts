import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compsubchild4Component } from './compsubchild4.component';

describe('Compsubchild4Component', () => {
  let component: Compsubchild4Component;
  let fixture: ComponentFixture<Compsubchild4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compsubchild4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compsubchild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
