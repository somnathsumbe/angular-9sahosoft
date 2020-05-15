import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo5Component } from './servicecompo5.component';

describe('Servicecompo5Component', () => {
  let component: Servicecompo5Component;
  let fixture: ComponentFixture<Servicecompo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
