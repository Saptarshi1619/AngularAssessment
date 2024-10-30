import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Assessment } from '../../Models/assessment';
import { Question } from '../../Models/question'
import { match } from 'node:assert';

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

  @Input() arrAssessment:Assessment[] = []
  @Input() searchValue:string = ""
  // ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
  //   console.log(this.searchValue)
  //   for(var i = 0; i<this.arrAssessment.length; i++)
  //   {
  //     // console.log(this.arrAssessment[i].assessmentName.includes(this.searchValue))
  //     if(this.arrAssessment[i].assessmentName.includes(this.searchValue)){
  //       console.log('match', this.arrAssessment[i].assessmentName)
  //     }
  //   }
  // }

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
