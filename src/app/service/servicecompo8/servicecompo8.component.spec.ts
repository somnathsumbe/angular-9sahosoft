import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo8Component } from './servicecompo8.component';

describe('Servicecompo8Component', () => {
  let component: Servicecompo8Component;
  let fixture: ComponentFixture<Servicecompo8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
