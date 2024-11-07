import { Component } from '@angular/core';
import { TraineeSaptarshi } from '../../../../Models/traineesaptarshi';
import { TraineeService } from '../../../../services/trainee.service';
import { UserService } from '../../../../services/user.service';
import { UserSaptarshi } from '../../../../Models/usersaptarshi';

@Component({
  selector: 'app-viewtrainee',
  templateUrl: './viewtrainee.component.html',
  styleUrl: './viewtrainee.component.scss'
})
export class ViewtraineeComponent {
  arrtrainee:UserSaptarshi[] = []
  trainee:TraineeSaptarshi = new TraineeSaptarshi(0,0,'');

  constructor(private traineeService:TraineeService, private userService:UserService){
    this.userService.getAllUsers().subscribe(data=>{
      this.arrtrainee = data.filter(data=> data.role === 'Trainee')
    })
  }
}
