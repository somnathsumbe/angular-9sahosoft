import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Impcommandpage1Component } from './impcommandpage1.component';

describe('Impcommandpage1Component', () => {
  let component: Impcommandpage1Component;
  let fixture: ComponentFixture<Impcommandpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Impcommandpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Impcommandpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
