import { Component, OnInit } from '@angular/core';
import { User, UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-form-tab',
  templateUrl: './user-form-tab.component.html',
  styleUrls: ['./user-form-tab.component.css'],
})
export class UserFormTabComponent implements OnInit {
  users$ = this.userStore.users$;

  constructor(private userStore: UserStoreService) {}

  ngOnInit(): void {}

  userLabel(user: User) {
    return `${user.form.getRawValue().firstName} ${
      user.form.getRawValue().lastName
    }`;
  }

  remove(user: User): void {
    this.userStore.remove(user);
  }

  select(user: User): void {
    this.userStore.select(user);
  }
}
