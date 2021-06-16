import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss']
})
export class BlogHeaderComponent implements OnInit {


  @Input() coverImageUrl : string= '';
  constructor() { }

  ngOnInit(): void {
  }

}
