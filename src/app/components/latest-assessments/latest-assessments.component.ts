import { Component } from '@angular/core';
import { Assessment } from '../../Models/assessment';
import { Question } from '../../Models/question';

@Component({
  selector: 'app-latest-assessments',
  templateUrl: './latest-assessments.component.html',
  styleUrl: './latest-assessments.component.scss'
})
export class LatestAssessmentsComponent {
  latestAssessments: Assessment[] = [
    new Assessment(
      1,
      'General Knowledge Assessment',
      'A01',
      new Date(),
      '10:00 AM',
      [
        new Question(
          1,
          'What is the capital of France?',
          ['Paris', 'Berlin', 'Madrid', 'Rome'],
          'Paris',
          'Objective'
        ),
        new Question(
          2,
          'Explain the theory of relativity.',
          [],
          '',
          'Subjective'
        ),
      ],
      101,
      true,
      50
    ),
    new Assessment(
      2,
      'General Knowledge Assessment',
      'A02',
      new Date(),
      '12:00 PM',
      [
        new Question(
          1,
          'Which planet is known as the Red Planet?',
          ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          'Mars',
          'Objective'
        ),
        new Question(2, 'Describe your favorite book.', [], '', 'Subjective'),
      ],
      102,
      true,
      50
    ),
    new Assessment(
      3,
      'Science Basics Assessment',
      'A03',
      new Date(),
      '1:00 PM',
      [
        new Question(
          1,
          'What is H2O commonly known as?',
          ['Water', 'Hydrogen', 'Oxygen', 'Carbon Dioxide'],
          'Water',
          'Objective'
        ),
        new Question(
          2,
          'What are the main components of a computer?',
          [],
          '',
          'Subjective'
        ),
      ],
      103,
      false,
      50
    ),
  ]
}
