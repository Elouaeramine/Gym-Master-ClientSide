import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym-page',
  templateUrl: './gym-page.component.html',
  styleUrls: ['./gym-page.component.scss']
})
export class GymPageComponent implements OnInit {

  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
