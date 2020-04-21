import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklocalstrogevalueComponent } from './checklocalstrogevalue.component';

describe('ChecklocalstrogevalueComponent', () => {
  let component: ChecklocalstrogevalueComponent;
  let fixture: ComponentFixture<ChecklocalstrogevalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklocalstrogevalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklocalstrogevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
