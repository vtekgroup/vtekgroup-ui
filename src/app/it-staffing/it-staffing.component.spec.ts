import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItStaffingComponent } from './it-staffing.component';

describe('ItStaffingComponent', () => {
  let component: ItStaffingComponent;
  let fixture: ComponentFixture<ItStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
