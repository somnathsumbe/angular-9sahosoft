import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcolor1Component } from './parentcolor1.component';

describe('Parentcolor1Component', () => {
  let component: Parentcolor1Component;
  let fixture: ComponentFixture<Parentcolor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentcolor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentcolor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
