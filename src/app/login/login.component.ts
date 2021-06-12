import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import {User} from '../../Model/User';
import { Store } from '@ngxs/store';
import { Login, SignOut } from '../auth/auth.state.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
constructor(
   private usersService: UsersService,
   // tslint:disable-next-line: variable-name
   private _store: Store
    ) {}
  users: User[] = [];
  ngOnInit(): void {
    this.users = [];
  }
log(x: any) { console.log(x); }

register(loginForm: NgForm){
  if (loginForm.valid) {
    console.log('Form Submitted!');
    this.usersService.register(loginForm.value);
    loginForm.reset();
  }
}

addUser(loginForm: NgForm){
  // console.log(loginForm.value);
  this.usersService.addUser(loginForm.value);
}

// This method is for Loggin in  users
// @parameters : LoginForm
// this should be in the login.ts file
// There have been a mistake ( login component is actually Signup component)

login(loginForm: NgForm){
  if (loginForm.valid){
    console.log('Login Form submiittted ');
    this._store
    .dispatch(new Login({ email : loginForm.value.email , password : loginForm.value.password}))
    .subscribe(success  => {} , error => {});
  }
}

// This mehtod is when the user logs out

logout() {
  this._store.dispatch(new SignOut()).subscribe(success => {}, error => {});
}

getUsers() {
  this.usersService.getUsers().subscribe(
    (users) => {
      console.log(users);
    },
    (error) => {
      console.error('Probleme d\'access');
    }
  );
}

}
