import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesheaderComponent } from './recipesheader.component';

describe('RecipesheaderComponent', () => {
  let component: RecipesheaderComponent;
  let fixture: ComponentFixture<RecipesheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
