import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Activities } from 'src/Model/Activities';
import { SideFilter } from 'src/Model/SideFilter';


function removeItem<T>(arr: Array<T>, value: T): Array<T> { 
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}


@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})


export class FilterbarComponent implements OnInit {
@Output () sideFilterEvent: EventEmitter<SideFilter> = new EventEmitter<SideFilter>();
activities: Activities[];
access!: string[];
openOnWeekend!: string[];

searchActivities: string[] = [];
searchAccess!: string;

  constructor() { 
    this.activities=[
      {
        name: 'Swimming',
        value: 'swimming'
      },
      {
        name: 'Squach',
        value: 'squach'
      },
      {
        name: 'Aerobic',
        value: 'aerobic'
      },
      {
        name: 'Musculation',
        value: 'musculation'
      },
      {
        name: 'Zumba',
        value: 'zumba'
      },
      {
        name: 'Spinning',
        value: 'spinning'
      },
      {
        name: 'Yoga',
        value: 'yoga'
      }
    ];
    this.access=[ 'Mixt', 'Men', 'Women'];
    this.openOnWeekend=['Yes','No'];
  }

  sidefilter!: SideFilter;

  onSearchAct(event: any){

    if(!this.searchActivities.includes(event.target.value)){
      this.searchActivities.push(event.target.value);
    }
    else{
      console.log(event.target.value)
      this.searchActivities=removeItem(this.searchActivities, event.target.value );
    }

    this.sidefilter= new SideFilter(this.searchActivities);
    this.sideFilterEvent.emit(this.sidefilter); 
    
    console.log(this.searchActivities);
  }


  ngOnInit(): void {
  }
}
