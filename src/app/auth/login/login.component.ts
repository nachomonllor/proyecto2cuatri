import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  user : User; 

  constructor(private auth: AuthService) { }


  ngOnInit(): void {

  }
 
  loguearse() {
    //this.auth.login();
    //this.user = username;
    this.user = new User(this.username, this.password);
    this.auth.login(this.user);

  }


}
