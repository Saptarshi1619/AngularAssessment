import { Component } from '@angular/core';
import { TraineeSaptarshi } from '../../../../Models/traineesaptarshi';
import { TraineeService } from '../../../../services/trainee.service';

@Component({
  selector: 'app-viewtrainee',
  templateUrl: './viewtrainee.component.html',
  styleUrl: './viewtrainee.component.scss'
})
export class ViewtraineeComponent {
  arrtrainee:TraineeSaptarshi[] = []
  trainee:TraineeSaptarshi = new TraineeSaptarshi(0,0,'');

  constructor(private traineeService:TraineeService){
    this.arrtrainee = this.traineeService.getAllTrainees()
  }
}
