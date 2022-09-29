import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { HomeScreenStaffComponent } from '../components/home-screen-staff/home-screen-staff.component';
import { LeavemanagementComponent } from '../components/leavemanagement/leavemanagement.component';

@NgModule({
  declarations: [
    HomeScreenStaffComponent,
    LeavemanagementComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
  ]
})
export class StaffModule { }
