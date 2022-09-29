import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/components/login/login.component';
import { RegistrationComponent } from './common/components/registration/registration.component';
import { SideNavComponent } from './common/components/side-nav/side-nav.component';
import { StaffregistrationComponent } from './common/components/staffregistration/staffregistration.component';
const routes: Routes = [
  {path:'',component:LoginComponent,},
  {path:'login',component:LoginComponent,},
  {path:'registerHOD',component:RegistrationComponent,},
  {path:'registerStaff',component:StaffregistrationComponent,},
  {
    path: 'hod',
    loadChildren: () => import('./Modules/HodModule/hod/hod.module').then(m => m.HodModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./Modules/StaffModule/staff/staff.module').then(m => m.StaffModule)
  },
  {path:'',component:SideNavComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
