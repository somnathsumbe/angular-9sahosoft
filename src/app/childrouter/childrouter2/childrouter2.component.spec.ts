import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childrouter2Component } from './childrouter2.component';

describe('Childrouter2Component', () => {
  let component: Childrouter2Component;
  let fixture: ComponentFixture<Childrouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childrouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childrouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
