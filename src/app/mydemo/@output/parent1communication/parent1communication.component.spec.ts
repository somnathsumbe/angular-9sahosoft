import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1communicationComponent } from './parent1communication.component';

describe('Parent1communicationComponent', () => {
  let component: Parent1communicationComponent;
  let fixture: ComponentFixture<Parent1communicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent1communicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1communicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
