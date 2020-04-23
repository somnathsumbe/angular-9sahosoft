import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompsuubjectComponent } from './compsuubject.component';

describe('CompsuubjectComponent', () => {
  let component: CompsuubjectComponent;
  let fixture: ComponentFixture<CompsuubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompsuubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompsuubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
