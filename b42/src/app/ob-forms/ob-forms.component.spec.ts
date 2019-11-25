import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObFormsComponent } from './ob-forms.component';

describe('ObFormsComponent', () => {
  let component: ObFormsComponent;
  let fixture: ComponentFixture<ObFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
