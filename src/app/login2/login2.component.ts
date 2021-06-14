import { RouterModule } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  log(x: any) { console.log(x); }

  login(signInForm: NgForm){
    if (signInForm.valid) {
      console.log('Form Submitted!');
      this.userService.login(signInForm.value.email,  signInForm.value.password).subscribe(
        (result)=>{
          this.log(result);
          localStorage.setItem('token', 'ee')

        },
        (error) =>{
          console.error(error);
        }
      );
      signInForm.reset();
    }
  }
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

}
