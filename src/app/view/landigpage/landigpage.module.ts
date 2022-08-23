import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandigpageRoutingModule } from './landigpage-routing.module';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DashboarcontainerComponent } from './dashboarcontainer/dashboarcontainer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MiddleComponent,
    DashboarcontainerComponent
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
