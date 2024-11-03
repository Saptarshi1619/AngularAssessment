import { Component } from '@angular/core';

@Component({
  selector: 'app-view-assessmentscore',
  templateUrl: './view-assessmentscore.component.html',
  styleUrl: './view-assessmentscore.component.scss'
})
export class ViewAssessmentscoreComponent {
  arrScores = [
    {
      traineeId: 'T01',
      assessmentId: 'A01',
      score: 85,
      date: new Date('2023-11-02')
    },
    {
      traineeId: 'T02',
      assessmentId: 'A02',
      score: 90,
      date: new Date('2023-11-03')
    },
    {
      traineeId: 'T03',
      assessmentId: 'A03',
      score: 75,
      date: new Date('2023-11-04')
    },
    {
      traineeId: 'T04',
      assessmentId: 'A04',
      score: 88,
      date: new Date('2023-11-05')
    },
    {
      traineeId: 'T05',
      assessmentId: 'A05',
      score: 92,
      date: new Date('2023-11-06')
    },
    {
      traineeId: 'T06',
      assessmentId: 'A06',
      score: 78,
      date: new Date('2023-11-07')
    },
    {
      traineeId: 'T07',
      assessmentId: 'A07',
      score: 84,
      date: new Date('2023-11-08')
    },
    {
      traineeId: 'T08',
      assessmentId: 'A08',
      score: 80,
      date: new Date('2023-11-09')
    },
    {
      traineeId: 'T09',
      assessmentId: 'A09',
      score: 76,
      date: new Date('2023-11-10')
    },
    {
      traineeId: 'T10',
      assessmentId: 'A10',
      score: 89,
      date: new Date('2023-11-11')
    }
  ];
}
