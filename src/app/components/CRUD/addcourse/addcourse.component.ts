import { Component, OnInit } from '@angular/core';
import { CourseSaptarshi } from '../../../Models/coursesaptarshi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})
export class AddcourseComponent implements OnInit{
  courseForm: FormGroup;
  submitted = true;
  arrCourse: CourseSaptarshi[] = []
  course = new CourseSaptarshi(0,'','')

  constructor(private formbuilder:FormBuilder, private courseservice:CourseService){
    this.arrCourse = this.courseservice.getAllCourses();
    this.courseForm = this.formbuilder.group({
      cId:[0],
      cname:[''],
    });
  }
  ngOnInit(): void {
    this.courseForm = this.formbuilder.group({
      cId: ['', Validators.required],
      cname: ['', [Validators.required, Validators.minLength(3)]]
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
      this.course = new CourseSaptarshi(tempId, cname, description)
      this.courseservice.addCourse(this.course)
    }
  }
}
