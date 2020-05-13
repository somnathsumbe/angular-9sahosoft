import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Typescriptclass2Component } from './typescriptclass2.component';

describe('Typescriptclass2Component', () => {
  let component: Typescriptclass2Component;
  let fixture: ComponentFixture<Typescriptclass2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Typescriptclass2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Typescriptclass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
