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
      this.router.navigate(['calculo']);
    } else {
      // TODO error sweetalert
      //console.log("error");
      this.router.navigate(['error']);
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  findUser(user): User {
   // debugger
     return this.users.find(u => { 
      //  if (u === user)
      //  return true;
      //  else 
      //  return false;
     // debugger
       return u.username === user.username;
    });
   
    

  }

}
