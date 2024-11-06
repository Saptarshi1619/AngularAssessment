import { Component } from '@angular/core';
import { Assessment } from '../../Models/assessment';
import { Question } from '../../Models/question';
import { ActivatedRoute, Params } from '@angular/router';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-takeassessment',
  templateUrl: './takeassessment.component.html',
  styleUrl: './takeassessment.component.scss'
})
export class TakeassessmentComponent {
  assessment: Assessment = new Assessment(
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


  constructor(private activatedRoute:ActivatedRoute, private assessmentService:AssessmentService){
    this.activatedRoute.params.subscribe((params:Params)=>{
      console.log(params['id'])
      let aId = parseInt(params['id'])
      this.assessmentService.getAssessmentById(aId).subscribe(data=>{
        this.assessment = data
      })
    })
  }

  // Array to store the selected answers by the user
  selectedAnswers: string[] = [];
  
  // Store the total marks obtained
  totalMarks: number | null = null;

  // Function to select an answer
  selectAnswer(questionIndex: number, selectedOption: string) {
    if (this.selectedAnswers[questionIndex] === selectedOption) {
      return; // If the same option is selected again, do nothing
    }

    // Save the selected answer
    this.selectedAnswers[questionIndex] = selectedOption;
  }

  // Check if the selected answer is correct
  isAnswerCorrect(questionIndex: number, selectedOption: string): boolean {
    const question = this.assessment.questions[questionIndex];
    return selectedOption === question.answer;
  }

  // Calculate the total marks
  calculateTotalMarks() {
    let marks = 0;
    this.selectedAnswers.forEach((selectedAnswer, index) => {
      if (selectedAnswer === this.assessment.questions[index].answer) {
        // Convert the points to a number before adding to the total
        marks += parseInt(this.assessment.questions[index].points);
      }
    });
    this.totalMarks = marks;
  }

}


