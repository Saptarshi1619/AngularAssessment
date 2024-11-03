import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-assessmentscore',
  templateUrl: './add-assessmentscore.component.html',
  styleUrl: './add-assessmentscore.component.scss'
})
export class AddAssessmentscoreComponent {
  scoreForm: FormGroup;

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

  onSubmit() {
    if (this.scoreForm.valid) {
      const newScore = this.scoreForm.value;
      console.log('New Score Added:', newScore);
    } else {
      console.log('Form is invalid');
      this.scoreForm.markAllAsTouched();
    }
  }
}
