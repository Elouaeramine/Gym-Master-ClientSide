import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/Model/Blog';

@Component({
  selector: 'app-blog-cards-list',
  templateUrl: './blog-cards-list.component.html',
  styleUrls: ['./blog-cards-list.component.scss']
})
export class BlogCardsListComponent implements OnInit {

  blogs : Blog[] = [];
  constructor(private blogService :BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      (data)=> {
        this.blogs =[...data];
        console.log(data);
      },
      (error) =>{
        console.log('Error Occured ', error);
      }
    )
  }

}
