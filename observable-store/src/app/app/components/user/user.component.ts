import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userStore: UserStoreService) { }

  ngOnInit(): void {
  }

  save() {
    this.userStore.save();
  }
}
