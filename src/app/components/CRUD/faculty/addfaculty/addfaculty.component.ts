import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultySaptarshi } from '../../../../Models/facultysaptarshi';
import { FacultyService } from '../../../../services/faculty.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrl: './addfaculty.component.scss'
})
export class AddfacultyComponent implements OnInit {
  facultyForm: FormGroup;
  submitted = true;
  arrFaculty: FacultySaptarshi[] = []
  faculty = new FacultySaptarshi(0,0,'')

  constructor(private formbuilder:FormBuilder, private facultyservice:FacultyService){
    this.arrFaculty = this.facultyservice.getAllFaculty();
    this.facultyForm = this.formbuilder.group({
      Id:[0],
      userId:[0],
      name:['']
    });
  }
  ngOnInit(): void {
    this.facultyForm = this.formbuilder.group({
      Id: ['', Validators.required],
      userId: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;
    this.arrFaculty.forEach((p)=>{
      if(maxId < p.id){
        maxId = p.id
      }
    });

    tempId = maxId;
    tempId = tempId + 1;
    console.log(tempId)

    let Id = this.facultyForm.value.Id;
    let userId = this.facultyForm.value.userId;
    let name = this.facultyForm.value.name;

    if(Id && userId && name && this.facultyForm.valid)
    {
      this.faculty = new FacultySaptarshi(tempId, userId, name)
      this.facultyservice.addFaculty(this.faculty)
    }
    else {
      this.facultyForm.markAllAsTouched(); // This will trigger validation messages for all fields
    }
  }
}
