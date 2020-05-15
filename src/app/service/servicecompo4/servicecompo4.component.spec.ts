import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo4Component } from './servicecompo4.component';

describe('Servicecompo4Component', () => {
  let component: Servicecompo4Component;
  let fixture: ComponentFixture<Servicecompo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
