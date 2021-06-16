import { GymHome } from './../../Model/GymHome';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pack } from 'src/Model/Pack';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http : HttpClient) { }

  getGyms(): Observable<GymHome[]>{
    return this.http.get<GymHome[]>(`${environment.apiUrl}/gym`);
  }

  getGym(id: number): Observable<GymHome>{
    return this.http.get<GymHome>(`${environment.apiUrl}/gym/${id}`);
  }

  getPacks(id: number): Observable<Pack[]>{
    return this.http.get<Pack[]>(`${environment.apiUrl}/gym/${id}/packs`);
  }

}
