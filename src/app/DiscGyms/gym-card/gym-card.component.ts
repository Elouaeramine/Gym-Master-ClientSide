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

  ngOnInit(): void {
  }

}
