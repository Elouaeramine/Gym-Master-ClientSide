import { Component, OnInit } from '@angular/core';
import { Gym } from 'src/Model/Gym';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // private _searchByName: any;
  // get searchByName(): any {
  //   return this._searchByName;
  // }
  // set searchByName(value: any){
  //   this._searchByName=value;
  //   this.filteredGyms = this.filterGyms(value);
  // }
  // filterGyms(searchString: any){

  // }

  
  constructor() { }

  ngOnInit(): void {
  }

}
