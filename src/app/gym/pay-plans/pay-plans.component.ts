import { Component, Input, OnInit } from '@angular/core';
import { Pack } from 'src/Model/Pack';

@Component({
  selector: 'app-pay-plans',
  templateUrl: './pay-plans.component.html',
  styleUrls: ['./pay-plans.component.scss']
})
export class PayPlansComponent implements OnInit {

  @Input() packs : Pack[] = [];
  @Input() monthly:boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
