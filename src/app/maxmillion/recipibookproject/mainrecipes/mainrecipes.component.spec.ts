import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainrecipesComponent } from './mainrecipes.component';

describe('MainrecipesComponent', () => {
  let component: MainrecipesComponent;
  let fixture: ComponentFixture<MainrecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainrecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
