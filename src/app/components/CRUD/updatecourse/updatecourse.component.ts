import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseSaptarshi } from '../../../Models/coursesaptarshi';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrl: './updatecourse.component.scss'
})
export class UpdatecourseComponent {
  courseForm: FormGroup;
  submitted!: true;
  arrCourse: CourseSaptarshi[] = []
  course:CourseSaptarshi = new CourseSaptarshi(0,'','')
  idUpdated:number = 0;

  constructor(private formBuilder:FormBuilder, private courseService:CourseService){
    this.arrCourse = this.courseService.getAllCourses()
    this.courseForm = this.formBuilder.group({
      id:[0],
      name:[''],
      description:['']
    })
  }

  onSubmit(){
    this.submitted = true;
    let id = this.courseForm.value.id;
    let name = this.courseForm.value.name;
    let description = this.courseForm.value.description;

    if(id && name && description){
      this.course = new CourseSaptarshi(this.idUpdated, name,  description)
      this.courseService.updateCourse(this.course);
    }
  }

  onChangeType(evt:any){
    console.log(evt.target.value);
    var idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim());
    console.log(this.idUpdated);
    this.course = this.courseService.getCourseById(this.idUpdated);
    this.courseForm.get('id')?.setValue(this.course.id)
    this.courseForm.get('name')?.setValue(this.course.name)
    this.courseForm.get('description')?.setValue(this.course.description)
  }
}
