import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseSaptarshi } from '../../../../Models/coursesaptarshi';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrl: './updatecourse.component.scss'
})
export class UpdatecourseComponent {
  courseForm: FormGroup;
  submitted = false;
  arrCourses: CourseSaptarshi[] = [];
  course: CourseSaptarshi = new CourseSaptarshi(0, '', '');
  idUpdated: number = 0;

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) {
    // Fetch all courses initially
    this.courseService.getAllCourses().subscribe(data => {
      this.arrCourses = data;
    });
    
    // Initialize the form group
    this.courseForm = this.formBuilder.group({
      id: [0],
      name: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    // Initialize the form with validations
    this.courseForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    const id = this.courseForm.value.id;
    const name = this.courseForm.value.name;
    const description = this.courseForm.value.description;

    if (id && name && description && this.courseForm.valid) {
      this.course = new CourseSaptarshi(id, name, description);

      // Call the service to update the course
      this.courseService.updateCourse(this.course).subscribe(
        data => {
          console.log('Course updated:', data);
          // Optionally, handle the UI after successful update (e.g., show a success message, reset form)
        },
        error => {
          console.error('Error updating course:', error);
        }
      );
    } else {
      this.courseForm.markAllAsTouched(); // Trigger validation messages
    }
  }

  onChangeType(evt: any): void {
    const idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim(), 10); // Parse the ID

    // Fetch the selected course by its ID
    this.courseService.getCourseById(this.idUpdated).subscribe(data => {
      this.course = data;
      // Populate the form with the course details
      this.courseForm.get('id')?.setValue(this.course.id);
      this.courseForm.get('name')?.setValue(this.course.name);
      this.courseForm.get('description')?.setValue(this.course.description);
    });
  }
}
