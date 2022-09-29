import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenStaffComponent } from './home-screen-staff.component';

describe('HomeScreenStaffComponent', () => {
  let component: HomeScreenStaffComponent;
  let fixture: ComponentFixture<HomeScreenStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScreenStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeScreenStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
