import { Component } from '@angular/core';
import { ScoreserviceService } from '../../../../services/scoreservice.service';

@Component({
  selector: 'app-view-assessmentscore',
  templateUrl: './view-assessmentscore.component.html',
  styleUrl: './view-assessmentscore.component.scss'
})
export class ViewAssessmentscoreComponent {
  arrScores: any[] = [];

  constructor(private scoreService: ScoreserviceService) { }

  ngOnInit(): void {
    const role = localStorage.getItem('userRole')
    const traineeId = parseInt(localStorage.getItem('userId')||'0')
    if(role === 'Admin'){
      this.scoreService.getScores().subscribe(scores => {
        this.arrScores = scores;
      });
    }
    else{
      this.scoreService.getScores().subscribe(scores=>{
        this.arrScores = scores.filter(score=> score.traineeId === traineeId)
      })
    }
  }
}
