import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserDashboardComponent,
    AdmindashboardComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserDashboardComponent,
    AdmindashboardComponent
  ],
})
export class ComponentsModule { }
