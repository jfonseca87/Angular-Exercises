import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  users$ = this.userStore.users$;

  constructor(private userStore: UserStoreService) { }

  ngOnInit(): void {
  }

}
