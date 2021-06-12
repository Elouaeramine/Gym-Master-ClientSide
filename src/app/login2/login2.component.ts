import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  log(x: any) { console.log(x); }

  register (signInForm: NgForm){
    if (signInForm.valid) {
      console.log("Form Submitted!");
      signInForm.reset();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
