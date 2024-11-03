import { Component } from '@angular/core';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrl: './viewreport.component.scss'
})
export class ViewreportComponent {
  arrReports = [
    { traineeId: 'T001', assessmentId: 'A001', score: 85, date: '2024-10-10' },
    { traineeId: 'T002', assessmentId: 'A002', score: 90, date: '2024-10-11' },
    { traineeId: 'T003', assessmentId: 'A003', score: 78, date: '2024-10-12' },
    { traineeId: 'T004', assessmentId: 'A004', score: 88, date: '2024-10-13' },
  ];

  constructor() { }

}
