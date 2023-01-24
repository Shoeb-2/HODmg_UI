import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './common/components/login/login.component';
import { RegistrationComponent } from './common/components/registration/registration.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './common/material/material/material.module';
import { StaffregistrationComponent } from './common/components/staffregistration/staffregistration.component';
import { SideNavComponent } from './common/components/side-nav/side-nav.component';
import { HomeScreenStaffComponent } from './Modules/StaffModule/components/home-screen-staff/home-screen-staff.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    StaffregistrationComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
