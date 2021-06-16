import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Access } from 'src/Model/Access';
import { Activities } from 'src/Model/Activities';
import { Open } from 'src/Model/Open';

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
access: Access[];
openOnWeekend!: Open[];

searchActivities: string[] = [];
searchAccess: string[] = [];
searchOpen: string[] = [];

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
    this.access=[
      {
        name: 'Mixt'
      },
      {
        name: 'Men'
      },
      {
        name: 'Women'
      }
      ];
    this.openOnWeekend=[
      {
        value: 'Yes'
      },
      {
        value: 'No'
      }
    ];
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

    this.sidefilter= new SideFilter(this.searchActivities,this.searchAccess, this.searchOpen);
    this.sideFilterEvent.emit(this.sidefilter); 
    
    console.log(this.searchActivities);
  }

  onSearchAccess(event: any){

    if(!this.searchAccess.includes(event.target.value)){
      this.searchAccess.push(event.target.value);
    }
    else{
      console.log(event.target.value)
      this.searchAccess=removeItem(this.searchAccess, event.target.value );
    }

    this.sidefilter= new SideFilter(this.searchActivities,this.searchAccess, this.searchOpen);
    this.sideFilterEvent.emit(this.sidefilter); 
    
    console.log(this.searchAccess);
  }

  onSearchOpen(event: any){

    if(!this.searchOpen.includes(event.target.value)){
      this.searchOpen.push(event.target.value);
    }
    else{
      console.log(event.target.value)
      this.searchOpen=removeItem(this.searchOpen, event.target.value );
    }

    this.sidefilter= new SideFilter(this.searchActivities,this.searchAccess, this.searchOpen);
    this.sideFilterEvent.emit(this.sidefilter); 
    
    console.log(this.searchOpen);
  }




  ngOnInit(): void {
  }
}
