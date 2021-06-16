import { GymHome } from './../../Model/GymHome';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http : HttpClient) { }

  getGyms(): Observable<GymHome[]>{
    return this.http.get<GymHome[]>(`${environment.apiUrl}/gym`);
  }
}
