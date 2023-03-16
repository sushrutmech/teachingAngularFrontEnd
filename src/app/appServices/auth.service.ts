import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl:any="https://fuzzy-getup-moth.cyclic.app/auth/"

  userSession:any;
  null:any=null;

  constructor(
    private http: HttpClient,
    
  ) { }

  login(params: any) {
    return this.http.post<any>(this.authUrl+`login`, params)
  }

  logout(){
    localStorage.setItem("userToken",this.null)
    localStorage.setItem("userDetail",this.null)
  }

  registerUser(params: any) {
    console.log("payload to register" , params)
    return this.http.post<any>(this.authUrl+`register`, params)

  }

  getToken(){
    //console.log("token.." , localStorage.getItem('userToken'))
    return localStorage.getItem('userToken')
  }

  userDetail(){
   
   return this.http.get<any>(this.authUrl+`me`)
  
  }

}
