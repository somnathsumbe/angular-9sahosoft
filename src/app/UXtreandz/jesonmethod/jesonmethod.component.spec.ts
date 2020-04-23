import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JesonmethodComponent } from './jesonmethod.component';

describe('JesonmethodComponent', () => {
  let component: JesonmethodComponent;
  let fixture: ComponentFixture<JesonmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JesonmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JesonmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
