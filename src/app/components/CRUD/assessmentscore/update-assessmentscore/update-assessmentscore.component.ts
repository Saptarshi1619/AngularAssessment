import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScoreserviceService } from '../../../../services/scoreservice.service';

@Component({
  selector: 'app-update-assessmentscore',
  templateUrl: './update-assessmentscore.component.html',
  styleUrl: './update-assessmentscore.component.scss'
})
export class UpdateAssessmentscoreComponent {
  scoreForm: FormGroup;
  scores: any[] = [];  // To store scores from JSON server

  constructor(private fb: FormBuilder, private scoreService: ScoreserviceService) {
    this.scoreForm = this.fb.group({
      id: ['', Validators.required],
      traineeId: ['', Validators.required],
      assessmentId: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch the scores from the server when the component initializes
    this.scoreService.getScores().subscribe((scores) => {
      this.scores = scores;
    });
  }

  onChangeType(event: any): void {
    const selectedId = event.target.value;
    const selectedScore = this.scores.find(score => score.id === selectedId);
    
    if (selectedScore) {
      // Patch the form with selected score details
      this.scoreForm.patchValue({
        traineeId: selectedScore.traineeId,
        assessmentId: selectedScore.assessmentId,
        score: selectedScore.score,
        date: selectedScore.date
      });
    }
  }

  onSubmit(): void {
    if (this.scoreForm.valid) {
      const updatedScore = this.scoreForm.value;
      // Update the score using the score service
      this.scoreService.updateScore(updatedScore).subscribe(
        (response) => {
          console.log('Score updated successfully:', response);
        },
        (error) => {
          console.error('Error updating score:', error);
        }
      );
    } else {
      console.log('Form is invalid');
      this.scoreForm.markAllAsTouched();
    }
  }
}
