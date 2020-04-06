import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthclassComponent } from './forthclass.component';

describe('ForthclassComponent', () => {
  let component: ForthclassComponent;
  let fixture: ComponentFixture<ForthclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
