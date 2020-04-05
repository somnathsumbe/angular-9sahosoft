import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncexampleComponent } from './asyncexample.component';

describe('AsyncexampleComponent', () => {
  let component: AsyncexampleComponent;
  let fixture: ComponentFixture<AsyncexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
