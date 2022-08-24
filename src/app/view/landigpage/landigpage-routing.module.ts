import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { AdmindashboardComponent } from 'src/app/shared/components/admindashboard/admindashboard.component';
import { UserDashboardComponent } from 'src/app/shared/components/user-dashboard/user-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { DashboarcontainerComponent } from './dashboarcontainer/dashboarcontainer.component';

const routes: Routes = [
  {
    path: "dashBoard",
    canActivate: [AuthGuard],
    component: DashboarcontainerComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "courseDetail/:courseData",
    component: CourseDetailComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandigpageRoutingModule { }
