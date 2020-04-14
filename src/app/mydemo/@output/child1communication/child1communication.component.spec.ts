import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1communicationComponent } from './child1communication.component';

describe('Child1communicationComponent', () => {
  let component: Child1communicationComponent;
  let fixture: ComponentFixture<Child1communicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1communicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1communicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
