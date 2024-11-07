import { Injectable } from '@angular/core';
import { CourseSaptarshi } from '../Models/coursesaptarshi';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: CourseSaptarshi[] = [
    // {
    //   id: 1,
    //   name: 'Introduction to Programming', // cName
    //   description:
    //     'This course covers the basics of programming, focusing on fundamental concepts and problem-solving techniques.', // cDescription
    // },
    // {
    //   id: 2,
    //   name: 'Web Development', // cName
    //   description:
    //     'Learn to build responsive websites using HTML, CSS, and JavaScript, along with frameworks like Bootstrap.', // cDescription
    // },
    // {
    //   id: 3,
    //   name: 'Database Management Systems', // cName
    //   description:
    //     'An introduction to database design, SQL, and the management of data in relational databases.', // cDescription
    // },
    // {
    //   id: 4,
    //   name: 'Software Engineering', // cName
    //   description:
    //     'This course explores software development methodologies, project management, and software lifecycle.', // cDescription
    // },
    // {
    //   id: 5,
    //   name: 'Data Structures and Algorithms', // cName
    //   description:
    //     'Learn the fundamental data structures and algorithms, focusing on their applications and performance analysis.', // cDescription
    // },
    // {
    //   id: 6,
    //   name: 'Machine Learning', // cName
    //   description:
    //     'An introduction to machine learning concepts, algorithms, and applications using Python.', // cDescription
    // },
    // {
    //   id: 7,
    //   name: 'Cyber Security Basics', // cName
    //   description:
    //     'Understand the fundamentals of cybersecurity, including threats, vulnerabilities, and protection measures.', // cDescription
    // },
    // {
    //   id: 8,
    //   name: 'Mobile App Development', // cName
    //   description:
    //     'Learn how to create mobile applications for iOS and Android platforms using modern development tools.', // cDescription
    // },
    // {
    //   id: 9,
    //   name: 'Cloud Computing', // cName
    //   description:
    //     'Explore cloud computing concepts, models, and services, including AWS and Azure.', // cDescription
    // },
    // {
    //   id: 10,
    //   name: 'DevOps Practices', // cName
    //   description:
    //     'This course covers DevOps principles and practices, including continuous integration and delivery.', // cDescription
    // },
  ];
  baseURL: string;
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {  // Dependency injection
    this.baseURL = 'http://localhost:3000';  // Update this to your actual backend URL
  }

  // Get all courses
  getAllCourses(): Observable<CourseSaptarshi[]> {
    return this.httpClient.get<CourseSaptarshi[]>(this.baseURL + '/courses')
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  // Get course by ID
  getCourseById(id: number): Observable<CourseSaptarshi> {
    return this.httpClient.get<CourseSaptarshi>(this.baseURL + '/courses/' + id)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  // Add a new course
  addCourse(course: CourseSaptarshi): Observable<CourseSaptarshi> {
    return this.httpClient.post<CourseSaptarshi>(this.baseURL + '/courses', JSON.stringify(course), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  // Update an existing course
  updateCourse(course: CourseSaptarshi): Observable<CourseSaptarshi> {
    return this.httpClient.put<CourseSaptarshi>(this.baseURL + '/courses/' + course.id, JSON.stringify(course), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  // Delete a course by ID
  deleteCourse(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseURL + '/courses/' + id)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
  }

  // Error handling
  httpError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
