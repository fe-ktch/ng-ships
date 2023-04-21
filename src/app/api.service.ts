import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:8000/ships';

  constructor(private http: HttpClient) {}

  getShips(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  addShip(ship: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(this.url, ship, httpOptions);
  }
}
