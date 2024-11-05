import { Injectable } from '@angular/core';
import { CartSaptarshi } from '../Models/cartsaptarshi';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts: CartSaptarshi[] = []
  baseURL: string;
  httpHeader={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   }
  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://localhost:3000'
   }

   getCartById(id:number):Observable<CartSaptarshi>{
    return this.httpClient.get<CartSaptarshi>(this.baseURL + '/carts/' + id)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
   }

   updateCart(p: CartSaptarshi): Observable<CartSaptarshi> {
    return this.httpClient.put<CartSaptarshi>(`${this.baseURL}/carts/${p.id}`,JSON.stringify(p),this.httpHeader)
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
