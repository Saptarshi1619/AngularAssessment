import { Injectable } from '@angular/core';
import { Role } from '../Models/roles.enum';
import { UserSaptarshi } from '../Models/usersaptarshi';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, pipe, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserSaptarshi[] = [
    // {
    //   id: 0,
    //   firstName: 'Alice',
    //   lastName: 'Smith',
    //   email: 'alice.smith@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '123',
    //     street: 'Main St',
    //     area: 'Cityville',
    //     city: 'Cityville',
    //     state: 'State',
    //     zip: '12345',
    //     country: 'Country',
    //   },
    //   mobile: '123-456-7890',
    //   role: Role.Faculty,
    // },
    // {
    //   id: 1,
    //   firstName: 'Bob',
    //   lastName: 'Johnson',
    //   email: 'bob.johnson@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '456',
    //     street: 'Oak Ave',
    //     area: 'Townsville',
    //     city: 'Townsville',
    //     state: 'State',
    //     zip: '67890',
    //     country: 'Country',
    //   },
    //   mobile: '234-567-8901',
    //   role: Role.Trainee,
    // },
    // {
    //   id: 2,
    //   firstName: 'Charlie',
    //   lastName: 'Brown',
    //   email: 'charlie.brown@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '789',
    //     street: 'Pine Dr',
    //     area: 'Villagetown',
    //     city: 'Villagetown',
    //     state: 'State',
    //     zip: '54321',
    //     country: 'Country',
    //   },
    //   mobile: '345-678-9012',
    //   role: Role.Admin,
    // },
    // {
    //   id: 3,
    //   firstName: 'David',
    //   lastName: 'Williams',
    //   email: 'david.williams@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '321',
    //     street: 'Elm St',
    //     area: 'Capitol City',
    //     city: 'Capitol City',
    //     state: 'State',
    //     zip: '11223',
    //     country: 'Country',
    //   },
    //   mobile: '456-789-0123',
    //   role: Role.Trainee,
    // },
    // {
    //   id: 4,
    //   firstName: 'Eva',
    //   lastName: 'Davis',
    //   email: 'eva.davis@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '654',
    //     street: 'Maple Ln',
    //     area: 'Lakeview',
    //     city: 'Lakeview',
    //     state: 'State',
    //     zip: '33445',
    //     country: 'Country',
    //   },
    //   mobile: '567-890-1234',
    //   role: Role.Trainee,
    // },
    // {
    //   id: 5,
    //   firstName: 'Frank',
    //   lastName: 'Miller',
    //   email: 'frank.miller@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '987',
    //     street: 'Cedar Blvd',
    //     area: 'Mountainview',
    //     city: 'Mountainview',
    //     state: 'State',
    //     zip: '55667',
    //     country: 'Country',
    //   },
    //   mobile: '678-901-2345',
    //   role: Role.Trainee,
    // },
    // {
    //   id: 6,
    //   firstName: 'Grace',
    //   lastName: 'Wilson',
    //   email: 'grace.wilson@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '159',
    //     street: 'Birch Rd',
    //     area: 'Riverside',
    //     city: 'Riverside',
    //     state: 'State',
    //     zip: '77889',
    //     country: 'Country',
    //   },
    //   mobile: '789-012-3456',
    //   role: Role.Trainee,
    // },
    // {
    //   id: 7,
    //   firstName: 'Henry',
    //   lastName: 'Moore',
    //   email: 'henry.moore@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '753',
    //     street: 'Spruce Ct',
    //     area: 'Hillside',
    //     city: 'Hillside',
    //     state: 'State',
    //     zip: '99001',
    //     country: 'Country',
    //   },
    //   mobile: '890-123-4567',
    //   role: Role.Admin,
    // },
    // {
    //   id: 8,
    //   firstName: 'Isabella',
    //   lastName: 'Taylor',
    //   email: 'isabella.taylor@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '852',
    //     street: 'Ash Way',
    //     area: 'Greenfield',
    //     city: 'Greenfield',
    //     state: 'State',
    //     zip: '22334',
    //     country: 'Country',
    //   },
    //   mobile: '901-234-5678',
    //   role: Role.Trainee,
    // },
    // {
    //   id: 9,
    //   firstName: 'Jack',
    //   lastName: 'Anderson',
    //   email: 'jack.anderson@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '147',
    //     street: 'Fir St',
    //     area: 'Clearwater',
    //     city: 'Clearwater',
    //     state: 'State',
    //     zip: '44556',
    //     country: 'Country',
    //   },
    //   mobile: '012-345-6789',
    //   role: Role.Admin,
    // },
    // {
    //   id:10,
    //   firstName: 'Liam',
    //   lastName: 'Jackson',
    //   email: 'liam.jackson@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '135',
    //     street: 'Walnut St',
    //     area: 'Brookfield',
    //     city: 'Brookfield',
    //     state: 'State',
    //     zip: '98765',
    //     country: 'Country',
    //   },
    //   mobile: '123-456-7890',
    //   role: Role.Trainee,
    // },
    // {
    //   id:11,
    //   firstName: 'Mia',
    //   lastName: 'Harris',
    //   email: 'mia.harris@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '246',
    //     street: 'Chestnut Ct',
    //     area: 'Springfield',
    //     city: 'Springfield',
    //     state: 'State',
    //     zip: '54321',
    //     country: 'Country',
    //   },
    //   mobile: '234-567-8901',
    //   role: Role.Faculty,
    // },
    // {
    //   id:12,
    //   firstName: 'Noah',
    //   lastName: 'Martin',
    //   email: 'noah.martin@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '864',
    //     street: 'Oak St',
    //     area: 'Pinehill',
    //     city: 'Pinehill',
    //     state: 'State',
    //     zip: '67890',
    //     country: 'Country',
    //   },
    //   mobile: '345-678-9012',
    //   role: Role.Admin,
    // },
    // {
    //   id:13,
    //   firstName: 'Olivia',
    //   lastName: 'Thompson',
    //   email: 'olivia.thompson@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '357',
    //     street: 'Maple St',
    //     area: 'Lakeside',
    //     city: 'Lakeside',
    //     state: 'State',
    //     zip: '12312',
    //     country: 'Country',
    //   },
    //   mobile: '456-789-0123',
    //   role: Role.Trainee,
    // },
    // {
    //   id:14,
    //   firstName: 'Sophia',
    //   lastName: 'Garcia',
    //   email: 'sophia.garcia@example.com',
    //   password: 'password123',
    //   address: {
    //     houseNo: '963',
    //     street: 'Sycamore Dr',
    //     area: 'Valleyview',
    //     city: 'Valleyview',
    //     state: 'State',
    //     zip: '45654',
    //     country: 'Country',
    //   },
    //   mobile: '567-890-1234',
    //   role: Role.Faculty,
    // },
];
  
baseURL: string;
ProductArr: UserSaptarshi[] = []
products: UserSaptarshi[]=[]
httpHeader={
 headers: new HttpHeaders({
   'Content-Type' : 'application/json'
 })
}
constructor(private httpClient: HttpClient){  //dependency injection
 this.baseURL = 'http://localhost:3000'
}

  getAllUsers():Observable <UserSaptarshi[]> {
    return this.httpClient.get<UserSaptarshi[]>(this.baseURL + '/users')
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  getUserById(id: number): Observable<UserSaptarshi> {
    return this.httpClient.get<UserSaptarshi>(this.baseURL + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  addUser(user: UserSaptarshi): Observable<UserSaptarshi> {
    return this.httpClient.post<UserSaptarshi>(this.baseURL + '/users', JSON.stringify(user), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  updateUser(updatedUser: UserSaptarshi): Observable<UserSaptarshi> {
    return this.httpClient.put<UserSaptarshi>(this.baseURL + '/users/' + updatedUser.id, JSON.stringify(updatedUser), this.httpHeader)
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
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
