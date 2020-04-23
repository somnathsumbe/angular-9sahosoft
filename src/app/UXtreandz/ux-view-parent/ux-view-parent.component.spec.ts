import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxViewParentComponent } from './ux-view-parent.component';

describe('UxViewParentComponent', () => {
  let component: UxViewParentComponent;
  let fixture: ComponentFixture<UxViewParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxViewParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
