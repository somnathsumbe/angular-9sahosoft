import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compsubchild2Component } from './compsubchild2.component';

describe('Compsubchild2Component', () => {
  let component: Compsubchild2Component;
  let fixture: ComponentFixture<Compsubchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compsubchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compsubchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
