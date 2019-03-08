import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  username: string;
  password: string;
  loginError: string;
  error: string;


  public loginUserData = {};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigate(['/message']);
      },
       loginError => this.error = loginError.message + '  verify  your username or password !  ')
    ;
  }
}
