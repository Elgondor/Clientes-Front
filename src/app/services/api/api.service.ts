import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://cat-fact.herokuapp.com/facts/random?amount=10';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
