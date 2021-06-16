import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gym } from 'src/Model/Gym';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit {
  @Input() data!: Gym;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  
  unCheckedColor = 'white';
  checkedColor = 'yellow';
  rating = 3.5;
  maxRating = 5;

  id!: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.id = +params.get('id')
      }
    )
  }

}
