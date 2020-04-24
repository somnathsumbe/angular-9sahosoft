import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesmainComponent } from './cookiesmain.component';

describe('CookiesmainComponent', () => {
  let component: CookiesmainComponent;
  let fixture: ComponentFixture<CookiesmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
