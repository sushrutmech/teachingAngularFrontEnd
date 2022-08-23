import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    
    private injector:Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzAzNTI4OWVkMDZmNjMxYWQyZTY0ZWUiLCJyb2xlIjoidXNlciIsImlhdCI6MTY2MTE2NTkyMiwiZXhwIjoxNjkyNzIzNTIyfQ.A4-BYrUD6ds1Tq-KYfSExtbtEdd0TpMKyHqkmo9GNQQ"
    let authService = this.injector.get(AuthService);
   // console.log("token in interceptor" , authService.getToken())
    let jwtToken = req.clone({
      setHeaders:{
        Authorization: `bearer ${authService.getToken()}`
      }
    })
    return next.handle(jwtToken);
  }

}
