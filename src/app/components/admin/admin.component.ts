import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  Role = ''
  isAdminOrfaculty = false
  tabDisabled = false
  constructor(){
    if(localStorage.getItem('userRole')!=null){
      this.Role = localStorage.getItem('userRole')||'user'
      if(this.Role == 'Trainee'){
        this.tabDisabled = true
        //console.log(this.Role)
      }
    }
  }
}
