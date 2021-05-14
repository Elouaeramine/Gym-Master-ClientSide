import { HttpClient, HttpErrorResponse, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import {tap, map , catchError} from 'rxjs/operators';
import { User } from '../../Model/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = new Array<User>();

  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8000/api';


  getUsers() : Observable<User[]> {

    return this.http.get<User []>(`${this.baseUrl}/user`);
  }

  handleError(error : HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

  // TODO:
  // This function will return the JWT token from the query params
  // Should access the current authenticated user
  // should return a jwt : string
  getToken() {}


  login(email : string , password  : string ) {
    return this.http.post(`${this.baseUrl}/login`, {email , password});
  }

  register(credentials : User){
    console.log('reached Register method');
    return this.http.post(`${this.baseUrl}/register`, credentials).subscribe(data=>{
      console.log(data);
    });
  }

  // The signOut mehtod returns a null observable
  signOut(): Observable<null> {
    return of(null);
  }

  addUser(u: User): void {
    // u.id = this.users[this.users.length  - 1].id + 1;
    this.users.push(u);
  }
}
