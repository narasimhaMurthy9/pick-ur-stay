import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { baseUrls } from 'src/app/core/common/baseUrls';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/auth-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environment.API_URL;
  private loginUrl=baseUrls.login_URL;
  private refreshUrl=baseUrls.refresh_Url
  constructor(private http:HttpClient) { }

  //  send user credentails to api for signin
  signIn(userData):Observable<LoginResponse>{
   return this.http.post<LoginResponse>(this.baseUrl + this.loginUrl ,userData)
  }

  // for accessing refresh token once it expired 

  getRefreshToken():Observable<any>{
   const refreshToken = localStorage.getItem('refreshToken')

   const data = {
    refreshToken : refreshToken
   }
   return this.http.post(
    this.baseUrl + this.refreshUrl,
    data
   )
  
  }


}
