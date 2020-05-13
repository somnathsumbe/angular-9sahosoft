import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetmeetingComponent } from './setmeeting.component';

describe('SetmeetingComponent', () => {
  let component: SetmeetingComponent;
  let fixture: ComponentFixture<SetmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
