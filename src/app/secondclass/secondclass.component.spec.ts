import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondclassComponent } from './secondclass.component';

describe('SecondclassComponent', () => {
  let component: SecondclassComponent;
  let fixture: ComponentFixture<SecondclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
