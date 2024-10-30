import { Component } from '@angular/core';
import { CourseSaptarshi } from '../../../Models/coursesaptarshi';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.scss'
})
export class ViewcourseComponent {
  arrCourse:CourseSaptarshi[] = []
  course:CourseSaptarshi = new CourseSaptarshi(0,'','');

  constructor(private CourseService:CourseService){
    this.arrCourse = this.CourseService.getAllCourses()
    console.log(this.arrCourse)
  }
}
