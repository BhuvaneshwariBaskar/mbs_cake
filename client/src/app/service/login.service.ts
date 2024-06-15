import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl: String = 'http://localhost:8080/v1/auth';
  constructor(private http: HttpClient) {}

  login(loginForm:any): Observable<User> {
    console.log(loginForm);
    
    return this.http.post<User>(`${this.baseUrl}/login`, loginForm);
  }
}
