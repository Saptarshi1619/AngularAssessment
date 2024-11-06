import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreserviceService {

  private apiUrl = 'http://localhost:3000/scores'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  getScores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addScore(scoreData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, scoreData);
  }
}
