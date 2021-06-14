import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {tap, map , catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // users: Array<User> = new Array<User>();

  private userSubject: BehaviorSubject<User | any>;
  public user: Observable<User>;

  constructor(private http: HttpClient , private router: Router , private toastr: ToastrService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }




  getUsers(): Observable<User[]> {

    return this.http.get<User []>(`${environment.apiUrl}/user`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
  }

  handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

  update(id: any, params: any) {
    return this.http.put(`${environment.apiUrl}/user/${id}`, params)
        .pipe(map(x => {
            // update stored user if the logged in user updated their own record
            if (id == this.userValue.id) {
                // update local storage
                const user = { ...this.userValue, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                // publish updated user to subscribers
                this.userSubject.next(user);
            }
            return x;
        }));
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/${id}`)
        .pipe(map(x => {
            // auto logout if the logged in user deleted their own record
            if (id === this.userValue.id) {
                this.signOut();
            }
            return x;
        }));
}


  login(email: string , password: string ) {
    return this.http.post<User>(`${environment.apiUrl}/login`, {email , password}).pipe(
      map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate(['/home']);
        this.toastr.success('You Are Logged In !' , `Welcome ${user.first_name}`);
        return user;
      })
    );
  }

  // tslint:disable-next-line: typedef
  register(credentials: User){
    const user =  {
      'first_name'  : credentials.first_name,
      'last_name'  : credentials.last_name,
      'email' : credentials.email,
      'password' : credentials.password,
      'password_confirm' : credentials.password_confirm
    };
    console.log('reached Register method');
    return this.http.post(`${environment.apiUrl}/register`, user).subscribe(
      data => {
      console.log(data);
      this.toastr.info('Please Login Now' , 'Thank you For Signing up !');
      this.router.navigate(['/login']);
    },
    error => {
        this.toastr.error('There is an error ! Please Try Again' , 'Error');

    }
    );
  }

  // The signOut mehtod returns a null observable
  signOut(){
    // return of(null);
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  addUser(u: User): void {
    // u.id = this.users[this.users.length  - 1].id + 1;
    // this.users.push(u);
  }
}
