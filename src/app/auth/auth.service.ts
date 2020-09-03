import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];
  constructor(private router: Router) {
    this.users = this.getUsers();
  }
  
  login(user: User) {
    const userAux = this.findUser(user);
    if (userAux) {
      this.router.navigate(['/bienvenida']);
    } else {
      // TODO error sweetalert
    }
  }
  getUsers() {
    return  JSON.parse(localStorage.getItem('users'));
  }
  findUser(user): User {
    debugger
    return this.users.find(u => u === user);
  }
}
