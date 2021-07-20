import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ObjectUtils } from '../../utils/object-utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: Login;

  constructor() {}

  ngOnInit(): void {
    this.user = ObjectUtils.convertJsonToObject<Login>(localStorage.getItem('user'));
  }
}
