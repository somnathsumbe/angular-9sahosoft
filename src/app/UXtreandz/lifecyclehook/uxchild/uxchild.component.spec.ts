import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxchildComponent } from './uxchild.component';

describe('UxchildComponent', () => {
  let component: UxchildComponent;
  let fixture: ComponentFixture<UxchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
