import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl:any="http://localhost:3000/auth/"

  userSession:any;

  constructor(
    private http: HttpClient
  ) { }

  login(params: any) {
    return this.http.post<any>(this.authUrl+`login`, params)
    

  }

  registerUser(params: any) {
    console.log("payload to register" , params)
    return this.http.post<any>(this.authUrl+`register`, params)

  }

}
