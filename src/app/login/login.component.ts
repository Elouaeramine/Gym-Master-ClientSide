import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import {User} from '../../Model/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
constructor(
   private usersService: UsersService
    ) {}
  users: User[] = [];
  ngOnInit(): void {
    this.users = [];
  }
log(x: any) { console.log(x); }

register (loginForm: NgForm){
  if (loginForm.valid) {
    console.log("Form Submitted!");
    loginForm.reset();
  }
}

addUser(loginForm: NgForm){
  this.usersService.addUser(loginForm.value); 
}

getUsers() {
  console.log(this.usersService.getUsers());
}

}
