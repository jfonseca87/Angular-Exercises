import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login;
  mensaje = '';

  constructor(private router: Router) {
    this.user = new Login();
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  logIn(): void {
    if (this.user.user === 'jfonseca' && this.user.password === 'abc.123') {
      this.proccessProfile('admin');
      this.router.navigate(['/']);
      return;
    }

    if (this.user.user === 'pperez' && this.user.password === 'abc.123') {
      this.proccessProfile('user');
      this.router.navigate(['/']);
      return;
    }

    localStorage.clear();
    this.mensaje = 'User or password are wrong, please verify!!';
  }

  private proccessProfile(rol: string): void {
    this.user.rol = rol;
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
