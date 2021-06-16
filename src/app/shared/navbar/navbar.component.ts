import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private userService :UsersService){}
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  logout(){
    this.userService.signOut();
  }

  isLoggedIn = this.userService.userValue;

}
