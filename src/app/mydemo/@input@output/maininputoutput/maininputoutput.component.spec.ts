import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaininputoutputComponent } from './maininputoutput.component';

describe('MaininputoutputComponent', () => {
  let component: MaininputoutputComponent;
  let fixture: ComponentFixture<MaininputoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaininputoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaininputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
