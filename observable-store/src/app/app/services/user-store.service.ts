import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  form: Partial<FormGroup>;
  isSelected: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private readonly _users = new BehaviorSubject<Array<User>>([]);
  readonly users$ = this._users.asObservable();

  public get users(): User[] {
    debugger
    return this._users.getValue();
  }

  public set users(val: User[]) {
    debugger
    this._users.next(val);
  }

  constructor() {
    this.add();
  }

  add() {
    debugger
    const user = this.createUser();

    this.users = [...this.users, user];
    this.select(this.users[this.users.length - 1]);
  }

  select(selectedUser: User) {
    debugger
    const foundUser = this.users.find(user => user.id === selectedUser.id);

    if(foundUser) {
      this.users = this.users.map(user => ({
        ... user,
        isSelected: user.id === selectedUser.id
      }));
    }
  }

  remove(userToRemove: User) {
    debugger
    const usersWithoutRemoved = this.users.filter(user => user.id !== userToRemove.id);

    this.users = [ ... usersWithoutRemoved];
    this.select(this.users[0]);
  }

  save() {
    debugger
    this.users = [];
    this.add();
  }

  private createUser() {
    debugger
    return {
      id: new Date().valueOf().toString(),
      form: new FormGroup({
        firstName: new FormControl('New', [Validators.required]),
        lastName: new FormControl('User', [Validators.required]),
      }),
      isSelected: false,
    } as User;
  }

}
