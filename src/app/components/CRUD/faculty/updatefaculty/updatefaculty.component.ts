import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultySaptarshi } from '../../../../Models/facultysaptarshi';
import { FacultyService } from '../../../../services/faculty.service';

@Component({
  selector: 'app-updatefaculty',
  templateUrl: './updatefaculty.component.html',
  styleUrl: './updatefaculty.component.scss'
})
export class UpdatefacultyComponent {
  facultyForm: FormGroup;
  submitted!: true;
  arrFaculty: FacultySaptarshi[] = []
  faculty:FacultySaptarshi = new FacultySaptarshi(0,0,'')
  idUpdated:number = 0;

  constructor(private formBuilder:FormBuilder, private facultyService:FacultyService){
    this.arrFaculty = this.facultyService.getAllFaculty()
    this.facultyForm = this.formBuilder.group({
      id:[0],
      userId:[0],
      name:['']
    })
  }

  ngOnInit(): void {
    this.facultyForm = this.formBuilder.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    let id = this.facultyForm.value.id;
    let userId = this.facultyForm.value.userId;
    let name = this.facultyForm.value.name;

    if(id && userId && name && this.facultyForm.valid){
      this.faculty = new FacultySaptarshi(this.idUpdated, userId,  name)
      this.facultyService.updateFaculty(this.faculty);
    }else {
      this.facultyForm.markAllAsTouched();
    }
  }

  onChangeType(evt:any){
    console.log(evt.target.value);
    var idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim());
    console.log(this.idUpdated);
    this.faculty = this.facultyService.getFacultyById(this.idUpdated);
    this.facultyForm.get('userId')?.setValue(this.faculty.userId)
    this.facultyForm.get('name')?.setValue(this.faculty.name)
  }
}
