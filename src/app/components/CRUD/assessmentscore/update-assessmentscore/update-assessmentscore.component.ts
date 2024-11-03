import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-assessmentscore',
  templateUrl: './update-assessmentscore.component.html',
  styleUrl: './update-assessmentscore.component.scss'
})
export class UpdateAssessmentscoreComponent {
  scoreForm: FormGroup;
  arrScores = [
    { id: '1', traineeId: 'T001', assessmentId: 'A001', score: 85, date: '2024-10-10' },
    { id: '2', traineeId: 'T002', assessmentId: 'A002', score: 90, date: '2024-10-11' },
  ];
  constructor(private fb: FormBuilder) {
    this.scoreForm = this.fb.group({
      id: ['', Validators.required],
      traineeId: ['', Validators.required],
      assessmentId: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onChangeType(event: any): void {
    const selectedId = event.target.value;
    const selectedScore = this.arrScores.find(score => score.id === selectedId);
    if (selectedScore) {
      this.scoreForm.patchValue({
        traineeId: selectedScore.traineeId,
        assessmentId: selectedScore.assessmentId,
        score: selectedScore.score,
        date: selectedScore.date
      });
    }
  }

  onSubmit() {
    if (this.scoreForm.valid) {
      const updatedScore = this.scoreForm.value;
      console.log('Updated Score:', updatedScore);
    } else {
      console.log('Form is invalid');
      this.scoreForm.markAllAsTouched();
    }
  }
}
