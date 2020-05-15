import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo2Component } from './servicecompo2.component';

describe('Servicecompo2Component', () => {
  let component: Servicecompo2Component;
  let fixture: ComponentFixture<Servicecompo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
