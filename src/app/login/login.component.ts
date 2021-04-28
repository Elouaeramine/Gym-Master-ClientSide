import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
log(x: any) { console.log(x); }
submitted = false;

onSubmit() { this.submitted = true; }
preview(e: { preventDefault: () => void; }) {
  e.preventDefault();
  console.log('preview')
}

}
