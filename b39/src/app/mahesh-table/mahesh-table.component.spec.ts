import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshTableComponent } from './mahesh-table.component';

describe('MaheshTableComponent', () => {
  let component: MaheshTableComponent;
  let fixture: ComponentFixture<MaheshTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaheshTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaheshTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
