import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Input() name:string = "";
  @Input() price:number = 0;
  @Input() description:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
