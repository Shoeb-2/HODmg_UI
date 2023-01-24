import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { HomeScreenStaffComponent } from '../components/home-screen-staff/home-screen-staff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/common/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeScreenStaffComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    StaffRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StaffModule { }
