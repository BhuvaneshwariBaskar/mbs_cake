import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginservice: LoginService, private router: Router) {}

  login(loginForm: NgForm) {
    console.log(loginForm);

    if (loginForm.valid) {
      this.loginservice.login(loginForm.value).subscribe(
        (res: any) => {
          console.log(res);
          const token = res.token;
          const user = res.user;
          const authData = {
            token: token,
            user: user,
          };
          localStorage.setItem('authData', JSON.stringify(authData));
          alert('Login Successful');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error passing login details', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
