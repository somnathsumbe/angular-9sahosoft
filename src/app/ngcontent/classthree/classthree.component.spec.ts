import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassthreeComponent } from './classthree.component';

describe('ClassthreeComponent', () => {
  let component: ClassthreeComponent;
  let fixture: ComponentFixture<ClassthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
