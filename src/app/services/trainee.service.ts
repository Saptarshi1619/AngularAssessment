import { Injectable } from '@angular/core';
import { TraineeSaptarshi } from '../Models/traineesaptarshi';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  private trainees: TraineeSaptarshi[] = [
    {
      id: 1,
      userId: 6, // Reference to User
      name: "Alice Smith"
    },
    {
      id: 2,
      userId: 77, // Reference to User
      name: "Bob Johnson"
    },
    {
      id: 3,
      userId: 8, // Reference to User
      name: "Charlie Brown"
    },
    {
      id: 4,
      userId: 9, // Reference to User
      name: "David Wilson"
    },
    {
      id: 5,
      userId: 10, // Reference to User
      name: "Eva Davis"
    },
    {
      id: 6,
      userId: 11, // Reference to User
      name: "Frank Miller"
    },
    {
      id: 7,
      userId: 12, // Reference to User
      name: "Grace Lee"
    },
    {
      id: 8,
      userId: 13, // Reference to User
      name: "Hannah White"
    },
    {
      id: 9,
      userId: 14, // Reference to User
      name: "Ian Martinez"
    },
    {
      id: 10,
      userId: 15, // Reference to User
      name: "Jane Thomas"
    },
  ];

  constructor() {}

  getAllTrainees(): TraineeSaptarshi[] {
    return this.trainees;
  }

  getTraineeById(id: number): TraineeSaptarshi{
    let p = new TraineeSaptarshi(0,0,'')
    for(var i=0;i<this.trainees.length;i++){
      if(this.trainees[i].id == id){
        console.log(this.trainees[i])
        return this.trainees[i]
      }
   }
   return p
  }

  addTrainee(trainee: TraineeSaptarshi): void {
    this.trainees.push(trainee);
  }

  updateTrainee(updatedTrainee: TraineeSaptarshi): void {
    const index = this.trainees.findIndex(
      (trainee) => trainee.id === updatedTrainee.id
    );
    if (index !== -1) {
      this.trainees[index] = updatedTrainee;
    }
  }

  deleteTrainee(id: number): void {
    this.trainees = this.trainees.filter((trainee) => trainee.id !== id);
  }
}
