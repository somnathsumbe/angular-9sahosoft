import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecompo3Component } from './servicecompo3.component';

describe('Servicecompo3Component', () => {
  let component: Servicecompo3Component;
  let fixture: ComponentFixture<Servicecompo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Servicecompo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicecompo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
