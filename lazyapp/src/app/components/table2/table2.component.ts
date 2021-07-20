import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css'],
})
export class Table2Component implements OnInit {
  users = [];
  cols: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'userName', header: 'UserName' },
      { field: 'email', header: 'Email' },
      { field: 'active', header: 'Status' },
    ];

    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers2().subscribe(
      res => {
        this.users = res;
      }
    );
  }
}
