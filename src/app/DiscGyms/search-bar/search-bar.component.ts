import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Filter } from 'src/Model/Filter';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output () searchEvent: EventEmitter<Filter> = new EventEmitter<Filter>();
  @ViewChild ("name") searchName!: ElementRef; 
  @ViewChild ("location") searchLocation!: ElementRef; 
  filter!: Filter;

  onSearch(){
    this.filter= new Filter(this.searchName.nativeElement.value, this.searchLocation.nativeElement.value);
    this.searchEvent.emit(this.filter);
  }
  
  constructor() { }
  ngOnInit(): void {}

}
