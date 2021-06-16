import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/Model/Filter';
import { SideFilter } from 'src/Model/SideFilter';


@Component({
  selector: 'app-discover-gyms-page',
  templateUrl: './discover-gyms-page.component.html',
  styleUrls: ['./discover-gyms-page.component.scss']
})
export class DiscoverGymsPageComponent implements OnInit {
  searchName !: string;
  searchLocation !: string;
  sideFilter!: SideFilter;
  // searchActivities!: string[];
  // searchAccess!: string;
  // searchOpenOnWeekends!: string;

  onSearch(e: Filter) {
    this.searchName = e.name;
    this.searchLocation = e.location;
    console.log(this.searchName, "", this.searchLocation);
  }

  // onFilter(e: SideFilter) {
  //   this.searchActivities = e.activities;
  //   this.searchAccess = e.access;
  //   this.searchOpenOnWeekends = e.openOnWeekends;
  //   console.log(this.searchActivities, this.searchAccess, this.searchOpenOnWeekends);
  // }

  constructor() { }
  onSideFilter(e: SideFilter) {
    this.sideFilter = e;
    console.log(e);
  }
  ngOnInit(): void {
  }

}
