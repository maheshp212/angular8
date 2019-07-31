import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaraiblesComponent } from './varaibles.component';

describe('VaraiblesComponent', () => {
  let component: VaraiblesComponent;
  let fixture: ComponentFixture<VaraiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaraiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaraiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
