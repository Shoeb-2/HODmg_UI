import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from 'src/app/common/components/side-nav/side-nav.component';
import { HomeScreenStaffComponent } from '../components/home-screen-staff/home-screen-staff.component';

const routes: Routes = [
  {path:'',
  component:SideNavComponent,
  children:[
     { path: '',redirectTo:'Dasborad',pathMatch:'full' },
     { path: 'Dasborad', component: HomeScreenStaffComponent }
   ]},
  // { path: '',redirectTo:'Dasborad',pathMatch:'full' },
  // { path: 'Dasborad', component: HomeScreenStaffComponent },
  //{ path: 'manageLeave', component: LeavemanagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
