import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private loginservice: LoginService, private router: Router) {}

  register(Form: NgForm) {
    console.log(Form);

    if (Form.valid) {
      this.loginservice.register(Form.value).subscribe(
        (res: any) => {
          console.log(res);
          const user = res.user;
          const token = res.token;
          // Creating object
          const authData = {
            token: token,
            user: user
          };
          // Store the object in local storage
          localStorage.setItem('authData', JSON.stringify(authData));
          
          alert('Register Successfull');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error passing register details', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
