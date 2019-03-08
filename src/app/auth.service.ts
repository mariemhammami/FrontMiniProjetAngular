import { Injectable } from '@angular/core';
// import { Http, Headers, Response, URLSearchParams } from '@angular/http';


import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  loginUrl = 'http://127.0.0.1:8000/login_check';
  registerURL = 'http://127.0.0.1:8000/register';
  api = 'http://127.0.0.1:8000/api';
  user = 'http://127.0.0.1:8000/user';
   currentUser;

  constructor(private http: HttpClient, private router: Router) {
  }

  public registrationUser(user): any {
    // console.log(user);

    console.log(user);
    return this.http.post<any>(this.registerURL, user);
  }


  public loginUser(user): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/message']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getUserName() {
    return this.http.get(this.api);
  }

  getIDUSER() {
    return this.http.get(this.user);
  }

}
