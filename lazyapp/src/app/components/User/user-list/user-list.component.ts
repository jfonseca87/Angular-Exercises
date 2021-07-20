import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any;
  totalRecords = 0;
  loading = false;
  statuses: any = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.getUsers();

    this.statuses = [
      { label: 'Active', value: true},
      { label: 'Inactive', value: false }
    ];
  }

  getUsers(event: LazyLoadEvent): void {
    console.log(event);
    this.loading = true;

    this.userService.getUsers(event).subscribe(
      (res) => {
        (this.totalRecords = res.data.totalRecords),
          (this.users = res.data.data);
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
