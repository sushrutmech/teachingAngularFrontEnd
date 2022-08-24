import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/appServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser:any 

  constructor(private router: Router,
    private _authService: AuthService) {

  }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    let dataLocal: any = localStorage.getItem('userDetail')
    let currentUser = JSON.parse(dataLocal)
    
    console.log("*****", currentUser)
    if (currentUser) {
      //this.router.navigate(['/layout/home']);
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });


    return false;
  }

}
