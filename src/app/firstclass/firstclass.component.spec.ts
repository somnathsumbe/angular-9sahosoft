import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstclassComponent } from './firstclass.component';

describe('FirstclassComponent', () => {
  let component: FirstclassComponent;
  let fixture: ComponentFixture<FirstclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
