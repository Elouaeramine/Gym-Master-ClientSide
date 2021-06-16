import { GymService } from './../../services/gym.service';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { GymHome } from 'src/Model/GymHome';
import { Blog } from 'src/Model/Blog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  gyms: GymHome[] = [] ;
  blogs: Blog[] = []

  constructor( private gymService :GymService, private blogService : BlogService) { }

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
