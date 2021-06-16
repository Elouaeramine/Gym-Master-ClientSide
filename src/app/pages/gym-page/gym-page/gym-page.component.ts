import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GymService } from 'src/app/services/gym.service';
import { GymHome } from 'src/Model/GymHome';
import { Pack } from 'src/Model/Pack';

@Component({
  selector: 'app-gym-page',
  templateUrl: './gym-page.component.html',
  styleUrls: ['./gym-page.component.scss']
})
export class GymPageComponent implements OnInit {

  isChecked: boolean = false;
  id: number = 0;
  gym: GymHome = {} as GymHome;
  packs: Pack[] = [];

  constructor(private gymService: GymService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params)
        this.id = +params['id']
        this.gymService.getGym(this.id).subscribe(
          (data) =>
          { 
            this.gym = data
            console.log(data)
          }
          , (error) =>
            console.log(error)
        )
    
        this.gymService.getPacks(this.id).subscribe(
          (data) =>{
            this.packs = [...data]
          }
          , (error) =>
            console.log(error)
            
        )
      }
    )

   
  }

}
