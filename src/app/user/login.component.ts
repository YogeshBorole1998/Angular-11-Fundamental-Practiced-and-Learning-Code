import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #ffff00;
        padding-left: 10px;
        font-size: 13px;
      }
    `,
  ],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  mouseoverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: { userName: string; password: string }) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
