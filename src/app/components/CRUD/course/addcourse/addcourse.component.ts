import { Component, OnInit } from '@angular/core';
import { CourseSaptarshi } from '../../../../Models/coursesaptarshi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrl: './addcourse.component.scss'
})
export class AddcourseComponent implements OnInit{
  courseForm: FormGroup;
  submitted = false;
  arrCourses: CourseSaptarshi[] = [];
  course = new CourseSaptarshi(0, '', '');

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
    this.courseService.getAllCourses().subscribe(data => {
      this.arrCourses = data;
    });

    this.courseForm = this.formBuilder.group({
      id: [0],
      name: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;

    this.arrCourses.forEach((course) => {
      if (maxId < course.id) {
        maxId = course.id;
      }
    });

    tempId = maxId + 1;

    console.log('Generated Temp ID:', tempId);

    const name = this.courseForm.value.name;
    const description = this.courseForm.value.description;

    if (name && description && this.courseForm.valid) {
      this.course = new CourseSaptarshi(tempId, name, description);
      this.courseService.addCourse(this.course).subscribe(
        data => {
          console.log('Course added:', data);
          this.arrCourses.push(data); // Optionally add the new course to the array for immediate UI update
        },
        error => {
          console.error('Error adding course:', error);
        }
      );
    } else {
      this.courseForm.markAllAsTouched(); // Trigger validation messages for all fields
    }
  }
}
