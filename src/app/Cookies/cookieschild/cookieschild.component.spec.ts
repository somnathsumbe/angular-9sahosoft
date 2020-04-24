import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieschildComponent } from './cookieschild.component';

describe('CookieschildComponent', () => {
  let component: CookieschildComponent;
  let fixture: ComponentFixture<CookieschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookieschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
