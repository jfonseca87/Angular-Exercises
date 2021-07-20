import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';
import { ObjectUtils } from '../object-utils';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
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
      const rol = next.data.roles.indexOf(this.user.rol);
      if (rol > -1) {
        return true;
      }
    }

    this.router.navigate(['/']);
    return false;
  }
}
