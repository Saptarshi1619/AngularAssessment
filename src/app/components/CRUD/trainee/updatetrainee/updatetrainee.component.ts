import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraineeSaptarshi } from '../../../../Models/traineesaptarshi';
import { TraineeService } from '../../../../services/trainee.service';

@Component({
  selector: 'app-updatetrainee',
  templateUrl: './updatetrainee.component.html',
  styleUrl: './updatetrainee.component.scss'
})
export class UpdatetraineeComponent {
  traineeForm: FormGroup;
  submitted!: true;
  arrTrainee: TraineeSaptarshi[] = []
  trainee:TraineeSaptarshi = new TraineeSaptarshi(0,0,'')
  idUpdated:number = 0;

  constructor(private formBuilder:FormBuilder, private traineeService:TraineeService){
    this.arrTrainee = this.traineeService.getAllTrainees()
    this.traineeForm = this.formBuilder.group({
      id:[0],
      userId:[0],
      name:['']
    })
  }

  ngOnInit(): void {
    this.traineeForm = this.formBuilder.group({
      id: ['', Validators.required],
      userId: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    let id = this.traineeForm.value.id;
    let userId = this.traineeForm.value.userId;
    let name = this.traineeForm.value.name;

    if(id && userId && name && this.traineeForm.valid){
      this.trainee = new TraineeSaptarshi(this.idUpdated, userId,  name)
      this.traineeService.updateTrainee(this.trainee);
    }else{
      this.traineeForm.markAllAsTouched();
    }
  }

  onChangeType(evt:any){
    console.log(evt.target.value);
    var idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[0].trim());
    console.log(this.idUpdated);
    this.trainee = this.traineeService.getTraineeById(this.idUpdated)
    this.traineeForm.get('userId')?.setValue(this.trainee.userId)
    this.traineeForm.get('name')?.setValue(this.trainee.name)
  }
}
