import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentuseComponent } from './contentuse.component';

describe('ContentuseComponent', () => {
  let component: ContentuseComponent;
  let fixture: ComponentFixture<ContentuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
