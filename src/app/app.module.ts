import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPagesModule } from './view/auth-pages/auth-pages.module';
import { LandigpageModule } from './view/landigpage/landigpage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthPagesModule,
    HttpClientModule,
    LandigpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
