import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo7Component } from './servicecompo7.component';

describe('Servicecompo7Component', () => {
  let component: Servicecompo7Component;
  let fixture: ComponentFixture<Servicecompo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
