import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytempformComponent } from './mytempform.component';

describe('MytempformComponent', () => {
  let component: MytempformComponent;
  let fixture: ComponentFixture<MytempformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytempformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
