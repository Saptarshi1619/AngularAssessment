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
    this.scoreService.getScores().subscribe(scores => {
      this.arrScores = scores;
    });
  }
}
