import { Component } from '@angular/core';
import { Faculty } from '../../../Models/facultysaptarshi';
import { FacultyService } from '../../../services/faculty.service';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrl: './viewfaculty.component.scss'
})
export class ViewfacultyComponent {
  arrfaculty:Faculty[] = []
  faculty:Faculty = new Faculty(0,0,'');

  constructor(private FacultyService:FacultyService){
    this.arrfaculty = this.FacultyService.getAllFaculty()
  }
}
