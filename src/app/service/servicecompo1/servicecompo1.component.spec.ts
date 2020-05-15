import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo1Component } from './servicecompo1.component';

describe('Servicecompo1Component', () => {
  let component: Servicecompo1Component;
  let fixture: ComponentFixture<Servicecompo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
