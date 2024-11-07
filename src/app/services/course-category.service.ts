import { Injectable } from '@angular/core';
import { CategorySaptarshi } from '../Models/categorysaptarshi';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryService {

  private categories: CategorySaptarshi[] = [
    // {
    //   id: 1,
    //   description: 'Programming Languages',
    // },
    // {
    //   id: 2,
    //   description: 'Web Development',
    // },
    // {
    //   id: 3,
    //   description: 'Database Management',
    // },
    // {
    //   id: 4,
    //   description: 'Software Engineering',
    // },
    // {
    //   id: 5,
    //   description: 'Data Science',
    // },
  ];

  baseURL: string;
   httpHeader={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   }
   constructor(private httpClient: HttpClient){  //dependency injection
    this.baseURL = 'http://localhost:3000'
   }

  // getAllCategorySaptarshis(): CategorySaptarshi[]{
  //   return this.categories
  // }

  getAllCategory(): Observable<CategorySaptarshi[]>{
    return this.httpClient.get<CategorySaptarshi[]>(this.baseURL + '/categories')
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  getCategoryById(id:number):Observable<CategorySaptarshi>{
    return this.httpClient.get<CategorySaptarshi>(this.baseURL + '/categories/' + id)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  addCategory(categories: CategorySaptarshi): Observable<CategorySaptarshi>{
    return this.httpClient.post<CategorySaptarshi>(this.baseURL + '/categories',JSON.stringify(categories),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  updateCategory(p: CategorySaptarshi): Observable<CategorySaptarshi> {
    return this.httpClient.put<CategorySaptarshi>(this.baseURL + '/categories/' + p.id, JSON.stringify(p),this.httpHeader)
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
