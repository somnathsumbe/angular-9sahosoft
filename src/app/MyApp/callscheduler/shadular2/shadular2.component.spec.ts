import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shadular2Component } from './shadular2.component';

describe('Shadular2Component', () => {
  let component: Shadular2Component;
  let fixture: ComponentFixture<Shadular2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shadular2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shadular2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
