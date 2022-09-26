import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/components/login/login.component';
import { RegistrationComponent } from './common/components/registration/registration.component';
import { StaffregistrationComponent } from './common/components/staffregistration/staffregistration.component';
const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'login',component:LoginComponent,},
  {path:'registerHOD',component:RegistrationComponent,},
  {path:'registerStaff',component:StaffregistrationComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
