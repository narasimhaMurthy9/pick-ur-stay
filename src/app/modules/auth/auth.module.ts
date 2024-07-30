import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginScreenComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule
  ],
 exports:[LoginComponent,AuthComponent]
})
export class AuthModule { }
