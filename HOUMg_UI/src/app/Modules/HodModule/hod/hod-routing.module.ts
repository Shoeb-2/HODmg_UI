import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from 'src/app/common/components/side-nav/side-nav.component';
import { HomescreenHODComponent } from './homescreen-hod/homescreen-hod.component';

const routes: Routes = [
  {path:'',
  component:SideNavComponent,
  children:[
     { path: '',redirectTo:'Dasborad',pathMatch:'full' },
     { path: 'Dasborad', component: HomescreenHODComponent }
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
