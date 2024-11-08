import { Component } from '@angular/core';
import { ScoreserviceService } from '../../../../services/scoreservice.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrl: './viewreport.component.scss'
})
export class ViewreportComponent {
  reports: any[] = [];

  constructor(private scoreService: ScoreserviceService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.scoreService.getReports().subscribe(reports => {
      this.reports = reports;
    });
  }

}
