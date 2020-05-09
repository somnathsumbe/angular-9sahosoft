import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscontentComponent } from './classcontent.component';

describe('ClasscontentComponent', () => {
  let component: ClasscontentComponent;
  let fixture: ComponentFixture<ClasscontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasscontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
