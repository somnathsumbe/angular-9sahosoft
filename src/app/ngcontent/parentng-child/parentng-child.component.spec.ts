import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentngChildComponent } from './parentng-child.component';

describe('ParentngChildComponent', () => {
  let component: ParentngChildComponent;
  let fixture: ComponentFixture<ParentngChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentngChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentngChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
