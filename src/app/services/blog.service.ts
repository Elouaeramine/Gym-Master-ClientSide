import { Blog } from './../../Model/Blog';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() :Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.apiUrl}/blog`);
  }
}
