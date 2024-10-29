import { Component } from '@angular/core';
import { Course } from '../../../Models/coursesaptarshi';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})
export class AddcourseComponent {
  courseForm: FormGroup;
  submitted = true;
  arrCourse: Course[] = []
  course = new Course(0,'','')

  constructor(private formbuilder:FormBuilder, private courseservice:CourseService){
    this.arrCourse = this.courseservice.getAllCourses();
    this.courseForm = this.formbuilder.group({
      cId:[0],
      cname:[''],
      description:['']
    });
  }

  onSubmit(){
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;
    this.arrCourse.forEach((p)=>{
      if(maxId < p.id){
        maxId = p.id
      }
    });

    tempId = maxId;
    tempId = tempId + 1;
    console.log(tempId)

    let cId = this.courseForm.value.cId;
    let cname = this.courseForm.value.cname;
    let description = this.courseForm.value.description;

    console.log(cId, cname, description);
    if(cId && cname && description)
    {
      this.course = new Course(tempId, cname, description)
      this.courseservice.addCourse(this.course)
    }
  }
}
