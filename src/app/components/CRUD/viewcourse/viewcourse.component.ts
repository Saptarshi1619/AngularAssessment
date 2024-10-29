import { Component } from '@angular/core';
import { Course } from '../../../Models/coursesaptarshi';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.scss'
})
export class ViewcourseComponent {
  arrCourse:Course[] = []
  course:Course = new Course(0,'','');

  constructor(private CourseService:CourseService){
    this.arrCourse = this.CourseService.getAllCourses()
    console.log(this.arrCourse)
  }
}
