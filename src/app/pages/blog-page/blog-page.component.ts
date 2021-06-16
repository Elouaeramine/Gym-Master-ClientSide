import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/Model/Blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  blogs : Blog[] = [];
  constructor(private blogService : BlogService) { }

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
