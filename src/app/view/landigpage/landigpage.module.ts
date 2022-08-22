import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandigpageRoutingModule } from './landigpage-routing.module';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MiddleComponent
  ],
  imports: [
    CommonModule,
    LandigpageRoutingModule
  ],
  exports: [
    HeaderComponent,
    MiddleComponent
  ]
})
export class LandigpageModule { }
