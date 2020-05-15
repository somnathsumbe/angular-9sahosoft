import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo6Component } from './servicecompo6.component';

describe('Servicecompo6Component', () => {
  let component: Servicecompo6Component;
  let fixture: ComponentFixture<Servicecompo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
