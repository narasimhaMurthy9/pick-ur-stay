import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError ,filter,switchMap,take,throwError} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private isRefreshing = false ;
    private refreshTokenSubject: BehaviorSubject<any> =new BehaviorSubject<any>(null)
  constructor(
    private toaster :ToastrService,
    private authService:AuthService
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authReq = request;
    const token = localStorage.getItem('token')

    const hasLogin=request.url.includes('/api/v1/auth/login');
    const hasRefresh=request.url.includes('/api/v1/auth/refresh-token');

    // if token not null and it is not a refresh url then add authorization  token to header
    
    if (token !=null && hasRefresh == false){
         authReq = this.addTokenHeader(request , token)
    }

    // if it is a login url or refresh url skip adding authorization token to header

    if (hasLogin == true || hasRefresh == true) {
      authReq = request.clone({
        headers: request.headers,
      });
    }
  
    // next.hnadle works when any errors
    return next.handle(authReq).pipe(
      catchError((error:HttpErrorResponse) => {
     
        // if error status has 401 means it is unauthorized , means token expired 
        if(error.status == 401){
          if(hasLogin == false){
            return this.handle401Error(request, next);
          }
        }
        
        
        if(error.error.message){
          this.toaster.error('Invalid credentials.Please check your username and password.')
        }
        return throwError(error);
      })
    )
  }

  
  private addTokenHeader(request: HttpRequest<any>, token: string) {
   
    
    return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  // we are checking for is Refreshing because to avoid infinte loops after token expiring
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = localStorage.getItem('token');
      if (token)
        return this.authService.getRefreshToken().pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            const {
              data: { accessToken, refreshToken },
            } = token;
           
            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken)
            this.refreshTokenSubject.next(token?.data?.accessToken);
            return next.handle(this.addTokenHeader(request, accessToken));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            return throwError(err);
          })
        );
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }
}
