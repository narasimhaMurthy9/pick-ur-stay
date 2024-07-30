import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inputValidations } from 'src/app/core/common/utils';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loadBtn: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // input validaiton
  inputValidationsErrors = (loginForm: FormGroup, type: string) => {
    // Check for validation errors
    return inputValidations(loginForm, type);
  };

  // login user
  loginUser() {
    if (this.loadBtn) return;
    this.loadBtn = true;
    let userData = this.loginForm.value;
    this.router.navigate(['/spot-pricing'])
    this.authService.signIn(userData).subscribe(
      (res) => {
        this.loadBtn = false;
        const {
          accessToken,
          refreshToken,
          user: { email, firstName, lastName },
        } = res['data'];

        const username = `${firstName} ${lastName}`;
       
      //  set token , refresh token and user full name in local storage
        localStorage.setItem('token', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('username', username);

        this.loadBtn = false;
        if (res['success']) {
          this.router.navigate(['/spot-pricing']);
        }
      },
      () => {
        this.loadBtn = false;
      }
    );
  }

}
