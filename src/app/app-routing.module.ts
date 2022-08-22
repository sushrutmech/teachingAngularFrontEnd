import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/auth-pages/login/login.component';
import { RegisterComponent } from './view/auth-pages/register/register.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "layout",
    
    loadChildren: () => import("./view/landigpage/landigpage.module")
      .then(mod => mod.LandigpageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
