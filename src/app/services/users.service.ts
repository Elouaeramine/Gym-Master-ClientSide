import { Injectable } from '@angular/core';
import { User } from '../../Model/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = new Array<User>();

  constructor() {}
  getUsers() : User [] {
    return this.users;
  }

  addUser(u: User): void {
    // u.id = this.users[this.users.length  - 1].id + 1;
    this.users.push(u);

    
  }
}
