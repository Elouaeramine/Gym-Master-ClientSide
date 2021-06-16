import { GymHome } from './../../../Model/GymHome';
import { GymService } from './../../services/gym.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-gym',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit {

  unCheckedColor = 'white';
  checkedColor = 'yellow';
  @Input() rating = 3.5;
  maxRating = 5;

  @Input() name = '';
  @Input() imageUrl = '';


  constructor() { }

  ngOnInit(): void {

  }

}
