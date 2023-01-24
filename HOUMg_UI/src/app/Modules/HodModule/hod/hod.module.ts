import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HomescreenHODComponent } from './homescreen-hod/homescreen-hod.component';
import { MaterialModule } from 'src/app/common/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomescreenHODComponent
  ],
  imports: [
    CommonModule,
    HodRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HodModule { }
