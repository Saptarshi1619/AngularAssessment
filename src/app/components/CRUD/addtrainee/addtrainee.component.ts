import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraineeSaptarshi } from '../../../Models/traineesaptarshi';
import { TraineeService } from '../../../services/trainee.service';

@Component({
  selector: 'app-addtrainee',
  templateUrl: './addtrainee.component.html',
  styleUrl: './addtrainee.component.scss'
})
export class AddtraineeComponent implements OnInit {
  traineeForm: FormGroup;
  submitted = true;
  arrTrainee: TraineeSaptarshi[] = []
  trainee = new TraineeSaptarshi(0,0,'')

  constructor(private formbuilder:FormBuilder, private traineeservice:TraineeService){
    this.arrTrainee = this.traineeservice.getAllTrainees();
    this.traineeForm = this.formbuilder.group({
      Id:[0],
      userId:[0],
      name:['']
    });
  }
  ngOnInit(): void {
    this.traineeForm = this.formbuilder.group({
      Id: ['', Validators.required],
      userId: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    var tempId = 0;
    var maxId = 0;
    this.arrTrainee.forEach((p)=>{
      if(maxId < p.id){
        maxId = p.id
      }
    });

    tempId = maxId;
    tempId = tempId + 1;
    console.log(tempId)

    let Id = this.traineeForm.value.Id;
    let userId = this.traineeForm.value.userId;
    let name = this.traineeForm.value.name;

    if(Id && userId && name && this.traineeForm.valid)
    {
      this.trainee = new TraineeSaptarshi(tempId, userId, name)
      this.traineeservice.addTrainee(this.trainee)
    }
    else {
      this.traineeForm.markAllAsTouched(); // This will trigger validation messages for all fields
    }
  }
}
