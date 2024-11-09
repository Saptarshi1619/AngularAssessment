import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, forkJoin, map, mergeMap, Observable, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreserviceService {

  private scoresUrl = 'http://localhost:3000/scores';
  private assessmentsUrl = 'http://localhost:3000/assessments';
  private httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllScores(): Observable<any[]> {
    return this.http.get<any[]>(this.scoresUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getScores(): Observable<any[]> {
    return this.http.get<any[]>(this.scoresUrl);
  }

  getAssessmentById(assessmentId: number): Observable<any> {
    return this.http.get<any>(`${this.assessmentsUrl}/${assessmentId}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addScore(scoreData: any): Observable<any> {
    return this.http.post<any>(this.scoresUrl, scoreData, this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getReports(): Observable<any[]> {
    return this.getAllScores().pipe(
      mergeMap(scores => {
        if (scores.length === 0) {
          return of([]); // Return an empty array if there are no scores
        }
        const assessmentRequests = scores.map(score =>
          this.getAssessmentById(score.assessmentId).pipe(
            map(assessment => ({
              ...score,
              assessmentName: assessment.assessmentName
            }))
          )
        );
        return forkJoin(assessmentRequests);
      })
    );
  }

  updateScore(scoreData: any): Observable<any> {
    const scoreId = scoreData.id;
    return this.http.put<any>(`${this.scoresUrl}/${scoreId}`, scoreData, this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
