import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor() { }

  ngOnInit(){
}
loginForm = new FormGroup({
fname : new FormControl(['', Validators.required])
})
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.loginForm.value);
}
}
