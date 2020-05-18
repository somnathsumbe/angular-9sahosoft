import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdtemplateComponent } from './curdtemplate.component';

describe('CurdtemplateComponent', () => {
  let component: CurdtemplateComponent;
  let fixture: ComponentFixture<CurdtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
