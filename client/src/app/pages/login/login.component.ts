import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginservice: LoginService) {}

  login(loginForm: NgForm) {
    console.log(loginForm);

    if (loginForm.valid) {
      this.loginservice.login(loginForm.value).subscribe(
        (res) => {
          console.log(res);
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
