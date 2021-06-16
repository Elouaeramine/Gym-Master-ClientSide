import { GymService } from './../../services/gym.service';
import { Component, OnInit } from '@angular/core';
import { GymHome } from 'src/Model/GymHome';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  gyms: GymHome[] = [] ;

  constructor( private gymService :GymService) { }

  ngOnInit(): void {
    this.gymService.getGyms().subscribe(
      (data) => {
        this.gyms = [...data];

        console.log(this.gyms);


      },
      (error) => {
        console.log('Error Occured');
      }
    );

  }

}
