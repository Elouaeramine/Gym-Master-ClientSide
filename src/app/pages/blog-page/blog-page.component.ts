import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Blog } from 'src/Model/Blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit , OnChanges{

  id: number = 0 ;

  blogs : Blog[] = [];
    constructor(private blogService : BlogService, private activatedRoute : ActivatedRoute) { }

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
      this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnChanges(){
  }

}
