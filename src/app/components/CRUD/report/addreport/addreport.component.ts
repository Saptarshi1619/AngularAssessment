import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrl: './addreport.component.scss'
})
export class AddreportComponent {
  reportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reportForm = this.fb.group({
      reportId: ['', Validators.required],
      traineeId: ['', Validators.required],
      assessmentId: ['', Validators.required],
      comments: ['', Validators.required],
      date: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.reportForm.valid) {
      const reportData = this.reportForm.value;
      console.log('Report Data:', reportData);
    } else {
      this.reportForm.markAllAsTouched();
    }
  }
}
