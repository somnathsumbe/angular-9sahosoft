import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childrouter1Component } from './childrouter1.component';

describe('Childrouter1Component', () => {
  let component: Childrouter1Component;
  let fixture: ComponentFixture<Childrouter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childrouter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childrouter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
