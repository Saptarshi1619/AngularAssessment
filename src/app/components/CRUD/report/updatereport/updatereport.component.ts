import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrl: './updatereport.component.scss'
})
export class UpdatereportComponent {
  reportForm: FormGroup;
  arrReports: any[] = [
    { reportId: '1', traineeId: 'T001', assessmentId: 'A001', comments: 'Good performance', date: '2023-10-01' },
    { reportId: '2', traineeId: 'T002', assessmentId: 'A002', comments: 'Needs improvement', date: '2023-10-02' }
  ];

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

  onChangeReport(event: any): void {
    const selectedReportId = event.target.value;
    const selectedReport = this.arrReports.find(report => report.reportId === selectedReportId);

    if (selectedReport) {
      this.reportForm.patchValue({
        traineeId: selectedReport.traineeId,
        assessmentId: selectedReport.assessmentId,
        comments: selectedReport.comments,
        date: selectedReport.date
      });
    }
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
