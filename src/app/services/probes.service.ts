import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Probes } from '../interfaces/probes.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProbesService {


  private baseUrl = '../../../assets/datasets/probes/probes.json';
  //private baseUrl = environment.apiUrl+'/api/sondes'
  constructor(private http: HttpClient) {}

  getProbes(): Observable<Probes[]> {
    return this.http.get<Probes[]>(this.baseUrl);
  }
}
