import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleNgclassComponent } from './ngstyle-ngclass.component';

describe('NgstyleNgclassComponent', () => {
  let component: NgstyleNgclassComponent;
  let fixture: ComponentFixture<NgstyleNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
