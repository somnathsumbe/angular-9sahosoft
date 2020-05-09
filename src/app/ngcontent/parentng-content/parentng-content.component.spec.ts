import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentngContentComponent } from './parentng-content.component';

describe('ParentngContentComponent', () => {
  let component: ParentngContentComponent;
  let fixture: ComponentFixture<ParentngContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentngContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentngContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
