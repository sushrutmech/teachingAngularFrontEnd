import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from 'src/app/shared/components/admindashboard/admindashboard.component';
import { UserDashboardComponent } from 'src/app/shared/components/user-dashboard/user-dashboard.component';
import { DashboarcontainerComponent } from './dashboarcontainer/dashboarcontainer.component';

const routes: Routes = [
  { path: "dashBoard", component: DashboarcontainerComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandigpageRoutingModule { }
