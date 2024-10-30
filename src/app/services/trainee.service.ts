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
    },
    {
      id: 2,
      userId: 77, // Reference to User
    },
    {
      id: 3,
      userId: 8, // Reference to User
    },
    {
      id: 4,
      userId: 9, // Reference to User
    },
    {
      id: 5,
      userId: 10, // Reference to User
    },
    {
      id: 6,
      userId: 11, // Reference to User
    },
    {
      id: 7,
      userId: 12, // Reference to User
    },
    {
      id: 8,
      userId: 13, // Reference to User
    },
    {
      id: 9,
      userId: 14, // Reference to User
    },
    {
      id: 10,
      userId: 15, // Reference to User
    },
  ];

  constructor() {}

  getAllTrainees(): TraineeSaptarshi[] {
    return this.trainees;
  }

  getTraineeById(id: number): TraineeSaptarshi | undefined {
    return this.trainees.find((trainee) => trainee.id === id);
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
