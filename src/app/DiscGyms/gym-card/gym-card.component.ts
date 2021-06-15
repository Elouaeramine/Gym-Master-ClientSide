import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/Model/Gym';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit {
  @Input() data!: Gym;

  constructor() { }

  selectColor = 'yellow';
  item = 0;
  maxRating = 5;
  myRating!: number;

  selectedRating(rate: number) {
    console.log('your rating is--', rate);
    this.myRating = rate;
  }

  ngOnInit(): void {
  }

}
