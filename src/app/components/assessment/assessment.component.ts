import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assessment } from '../../Models/assessment';
import { Question } from '../../Models/question'

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent implements OnInit{
  @Input() assessmentDetail:Assessment = new Assessment(
    0,
    '',
    '',
    new Date(),
    '',
    [new Question(0, '', [], '', '')],
    0,
    true,
    0
  );
  @Output() checkPrice:EventEmitter<number>
  constructor(){
    this.checkPrice = new EventEmitter<number>
  }

  ngOnInit(): void {
    this.emitPrice()
  }

  emitPrice(){
    this.checkPrice.emit(this.assessmentDetail.price)
  }

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
