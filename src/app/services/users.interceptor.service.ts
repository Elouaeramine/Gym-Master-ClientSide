import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersInterceptorService implements HttpInterceptor {

  constructor(private userService: UsersService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const headers = new HttpHeaders({
      Authorization : `Bearer ${this.userService.getToken()}`
    });

    const clone = req.clone({
      headers
    });

    return next.handle(clone);
  }
}
