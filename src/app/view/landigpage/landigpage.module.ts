import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandigpageRoutingModule } from './landigpage-routing.module';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DashboarcontainerComponent } from './dashboarcontainer/dashboarcontainer.component';
import { CartComponent } from './cart/cart.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MiddleComponent,
    DashboarcontainerComponent,
    CartComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    LandigpageRoutingModule,
    ComponentsModule
  ],
  exports: [
    HeaderComponent,
    MiddleComponent
  ]
})
export class LandigpageModule { }
