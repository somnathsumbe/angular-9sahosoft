import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueyimportComponent } from './jqueyimport.component';

describe('JqueyimportComponent', () => {
  let component: JqueyimportComponent;
  let fixture: ComponentFixture<JqueyimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueyimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueyimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
