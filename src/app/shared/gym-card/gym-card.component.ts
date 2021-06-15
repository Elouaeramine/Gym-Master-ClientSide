import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gym',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit {

  unCheckedColor = 'white';
  checkedColor = 'yellow';
  rating = 3.5;
  maxRating = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
