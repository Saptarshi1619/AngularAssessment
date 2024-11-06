import { Injectable } from '@angular/core';
import { AttendanceSaptarshi } from '../Models/attendancesaptarshi';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private attendanceRecords: AttendanceSaptarshi[] = [
    // "id": "1",
    //   "traineeId": 6,
    //   "assessmentId": 101,
    //   "attended": true,
    //   "date": "2023-11-01T00:00:00.000Z"
  ];
  
  baseURL: string;
   ProductArr: AttendanceSaptarshi[] = []
   products: AttendanceSaptarshi[]=[]
   httpHeader={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   }
   constructor(private httpClient: HttpClient){  //dependency injection
    this.baseURL = 'http://localhost:3000'
   }

  // getAllAttendanceSaptarshis(): AttendanceSaptarshi[]{
  //   return this.attendance
  // }

  getAllAttendance(): Observable<AttendanceSaptarshi[]>{
    return this.httpClient.get<AttendanceSaptarshi[]>(this.baseURL + '/attendance')
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  getAttendanceById(id:number):Observable<AttendanceSaptarshi>{
    return this.httpClient.get<AttendanceSaptarshi>(this.baseURL + '/attendance/' + id)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  addAttendance(assessment: AttendanceSaptarshi): Observable<AttendanceSaptarshi>{
    return this.httpClient.post<AttendanceSaptarshi>(this.baseURL + '/attendance',JSON.stringify(assessment),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  updateAttendance(p: AttendanceSaptarshi): Observable<AttendanceSaptarshi> {
    return this.httpClient.put<AttendanceSaptarshi>(this.baseURL + '/attendance/' + p.id, JSON.stringify(p),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  httpError(error:HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg=error.error.message;
    }
    else{
      msg=`Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
