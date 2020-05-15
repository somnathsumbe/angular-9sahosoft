import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainservicepageComponent } from './mainservicepage.component';

describe('MainservicepageComponent', () => {
  let component: MainservicepageComponent;
  let fixture: ComponentFixture<MainservicepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainservicepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainservicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
