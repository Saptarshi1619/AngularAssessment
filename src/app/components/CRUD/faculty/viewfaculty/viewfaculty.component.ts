import { Component } from '@angular/core';
import { FacultySaptarshi } from '../../../../Models/facultysaptarshi';
import { FacultyService } from '../../../../services/faculty.service';
import { UserSaptarshi } from '../../../../Models/usersaptarshi';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrl: './viewfaculty.component.scss'
})
export class ViewfacultyComponent {
  arrfaculty:UserSaptarshi[] = []
  faculty:FacultySaptarshi = new FacultySaptarshi(0,0,'');

  constructor(private userService:UserService){
    this.userService.getAllUsers().subscribe(data=>{
      this.arrfaculty = data.filter(data=> data.role === 'Faculty')
    })
  }
}
