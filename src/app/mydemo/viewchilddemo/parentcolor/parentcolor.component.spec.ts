import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcolorComponent } from './parentcolor.component';

describe('ParentcolorComponent', () => {
  let component: ParentcolorComponent;
  let fixture: ComponentFixture<ParentcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
