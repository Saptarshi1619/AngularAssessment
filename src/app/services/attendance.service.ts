import { Injectable } from '@angular/core';
import { AttendanceSaptarshi } from '../Models/attendancesaptarshi';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private attendanceRecords: AttendanceSaptarshi[] = [
    // new AttendanceSaptarshi(1, 6, 101, true, new Date('2023-11-01')),
    // new AttendanceSaptarshi(2, 77, 102, false, new Date('2023-11-02')),
    // new AttendanceSaptarshi(3, 8, 101, true, new Date('2023-11-03')),
    // new AttendanceSaptarshi(4, 9, 103, true, new Date('2023-11-04')),
    // new AttendanceSaptarshi(5, 10, 102, false, new Date('2023-11-05')),
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
