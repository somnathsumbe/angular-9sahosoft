import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderselectionComponent } from './genderselection.component';

describe('GenderselectionComponent', () => {
  let component: GenderselectionComponent;
  let fixture: ComponentFixture<GenderselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
