import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-form-toolbar',
  templateUrl: './user-form-toolbar.component.html',
  styleUrls: ['./user-form-toolbar.component.css']
})
export class UserFormToolbarComponent implements OnInit {

  constructor(private userStore: UserStoreService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userStore.add();
  }

}
