import { Component } from '@angular/core';
import { User } from './models/user';

import UsersServiceMock from '../utils/mocks/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[] = [];

  constructor() {
    this.initDb();
  }

  private initDb() {
    this.retriveUsers();
  }

  private retriveUsers() {
    const usersMock = new UsersServiceMock();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
      usersMock.getUsers().then((data) => {
        this.users = data;
        localStorage.setItem('users', JSON.stringify(this.users));
      });
    }
  }
}
