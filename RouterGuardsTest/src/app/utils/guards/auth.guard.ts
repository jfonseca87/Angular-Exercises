import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { ObjectUtils } from '../object-utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user: Login;

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.user = ObjectUtils.convertJsonToObject<Login>(
      localStorage.getItem('user')
    );

    if (this.user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
