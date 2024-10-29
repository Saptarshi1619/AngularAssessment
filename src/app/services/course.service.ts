import { Injectable } from '@angular/core';
import { Course } from '../Models/coursesaptarshi';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Introduction to Programming', // cName
      description:
        'This course covers the basics of programming, focusing on fundamental concepts and problem-solving techniques.', // cDescription
    },
    {
      id: 2,
      name: 'Web Development', // cName
      description:
        'Learn to build responsive websites using HTML, CSS, and JavaScript, along with frameworks like Bootstrap.', // cDescription
    },
    {
      id: 3,
      name: 'Database Management Systems', // cName
      description:
        'An introduction to database design, SQL, and the management of data in relational databases.', // cDescription
    },
    {
      id: 4,
      name: 'Software Engineering', // cName
      description:
        'This course explores software development methodologies, project management, and software lifecycle.', // cDescription
    },
    {
      id: 5,
      name: 'Data Structures and Algorithms', // cName
      description:
        'Learn the fundamental data structures and algorithms, focusing on their applications and performance analysis.', // cDescription
    },
    {
      id: 6,
      name: 'Machine Learning', // cName
      description:
        'An introduction to machine learning concepts, algorithms, and applications using Python.', // cDescription
    },
    {
      id: 7,
      name: 'Cyber Security Basics', // cName
      description:
        'Understand the fundamentals of cybersecurity, including threats, vulnerabilities, and protection measures.', // cDescription
    },
    {
      id: 8,
      name: 'Mobile App Development', // cName
      description:
        'Learn how to create mobile applications for iOS and Android platforms using modern development tools.', // cDescription
    },
    {
      id: 9,
      name: 'Cloud Computing', // cName
      description:
        'Explore cloud computing concepts, models, and services, including AWS and Azure.', // cDescription
    },
    {
      id: 10,
      name: 'DevOps Practices', // cName
      description:
        'This course covers DevOps principles and practices, including continuous integration and delivery.', // cDescription
    },
  ];
  constructor() { }

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id:number):Course{
    let p = new Course(0,'','')
    for(var i=0;i<this.courses.length;i++){
      if(this.courses[i].id == id){
        console.log(this.courses[i])
        return this.courses[i]
      }
   }
   return p
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  updateCourse(updatedCourse: Course): void {
    const index = this.courses.findIndex(
      (course) => course.id === updatedCourse.id
    );
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
