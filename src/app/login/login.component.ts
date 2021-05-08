import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
log(x: any) { console.log(x); }

register (loginForm: NgForm){
  if (loginForm.valid) {
    console.log("Form Submitted!");
    loginForm.reset();
  }
}

}
