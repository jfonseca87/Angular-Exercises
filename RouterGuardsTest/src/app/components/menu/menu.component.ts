import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ObjectUtils } from '../../utils/object-utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  user: Login;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = ObjectUtils.convertJsonToObject<Login>(localStorage.getItem('user'));
  }
}
