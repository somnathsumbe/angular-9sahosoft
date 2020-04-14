import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildmainpageComponent } from './viewchildmainpage.component';

describe('ViewchildmainpageComponent', () => {
  let component: ViewchildmainpageComponent;
  let fixture: ComponentFixture<ViewchildmainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildmainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
