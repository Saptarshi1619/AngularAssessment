import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Faculty } from '../../../Models/facultysaptarshi';
import { FacultyService } from '../../../services/faculty.service';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrl: './addfaculty.component.scss'
})
export class AddfacultyComponent {
  facultyForm: FormGroup;
  submitted = true;
  arrFaculty: Faculty[] = []
  faculty = new Faculty(0,0,'')

  constructor(private formbuilder:FormBuilder, private facultyservice:FacultyService){
    this.arrFaculty = this.facultyservice.getAllFaculty();
    this.facultyForm = this.formbuilder.group({
      Id:[0],
      userId:[0],
      name:['']
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

    if(Id && userId && name)
    {
      this.faculty = new Faculty(tempId, userId, name)
      this.facultyservice.addFaculty(this.faculty)
    }
  }
}
