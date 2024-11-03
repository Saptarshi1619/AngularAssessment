import { Injectable } from '@angular/core';
import { Assessment } from '../Models/assessment';
import { Question } from '../Models/question';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  assessments: Assessment[] = [
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
          '5'
        ),
        new Question(
          2,
          'Which planet is known as the Red Planet?',
          ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          'Mars',
          '5'
        ),
      ],
      101,
      true,
      40
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
          '5'
        ),
        new Question(
          2,
          'What is H2O commonly known as?',
          ['Water', 'Hydrogen', 'Oxygen', 'Carbon Dioxide'],
          'Water',
          '5'
        ),
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
          '5'
        ),
        new Question(
          2,
          'Who wrote "To Kill a Mockingbird"?',
          ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'],
          'Harper Lee',
          '5'
        ),
      ],
      103,
      false,
      50
    ),
    new Assessment(
      4,
      'Environmental Science Assessment',
      'A04',
      new Date(),
      '2:00 PM',
      [
        new Question(
          1,
          'Who wrote "To Kill a Mockingbird"?',
          ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'],
          'Harper Lee',
          '5'
        ),
        new Question(
          2,
          'What is the powerhouse of the cell?',
          ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
          'Mitochondria',
          '5'
        ),
      ],
      104,
      false,
      60
    ),
    new Assessment(
      5,
      'Environmental Science Assessment',
      'A05',
      new Date(),
      '3:00 PM',
      [
        new Question(
          1,
          'What is the powerhouse of the cell?',
          ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
          'Mitochondria',
          '5'
        ),
        new Question(
          2,
          'Which element has the chemical symbol O?',
          ['Oxygen', 'Gold', 'Silver', 'Iron'],
          'Oxygen',
          '5'
        ),
      ],
      105,
      true,
      40
    ),
    new Assessment(
      6,
      'Math Basics Assessment',
      'A06',
      new Date(),
      '4:00 PM',
      [
        new Question(
          1,
          'Which element has the chemical symbol O?',
          ['Oxygen', 'Gold', 'Silver', 'Iron'],
          'Oxygen',
          '5'
        ),
        new Question(
          2,
          'What is the largest mammal in the world?',
          ['Elephant', 'Blue Whale', 'Great White Shark', 'Giraffe'],
          'Blue Whale',
          '5'
        ),
      ],
      106,
      false,
      50
    ),
    new Assessment(
      7,
      'Math Basics Assessment',
      'A07',
      new Date(),
      '5:00 PM',
      [
        new Question(
          1,
          'What is the largest mammal in the world?',
          ['Elephant', 'Blue Whale', 'Great White Shark', 'Giraffe'],
          'Blue Whale',
          '5'
        ),
        new Question(
          2,
          'What is the currency of Japan?',
          ['Yen', 'Won', 'Dollar', 'Euro'],
          'Yen',
          '5'
        ),
      ],
      107,
      true,
      40
    ),
    new Assessment(
      8,
      'History Assessment',
      'A08',
      new Date(),
      '6:00 PM',
      [
        new Question(
          1,
          'What is the currency of Japan?',
          ['Yen', 'Won', 'Dollar', 'Euro'],
          'Yen',
          '5'
        ),
        new Question(
          2,
          'Who painted the Mona Lisa?',
          ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
          'Leonardo da Vinci',
          '5'
        ),
      ],
      108,
      false,
      45
    ),
    new Assessment(
      9,
      'History Assessment',
      'A09',
      new Date(),
      '7:00 PM',
      [
        new Question(
          1,
          'Who painted the Mona Lisa?',
          ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
          'Leonardo da Vinci',
          '5'
        ),
        new Question(
          2,
          'What is the boiling point of water?',
          ['100°C', '90°C', '80°C', '110°C'],
          '100°C',
          '5'
        ),
      ],
      109,
      true,
      60
    ),
    new Assessment(
      10,
      'Literature Assessment',
      'A10',
      new Date(),
      '8:00 PM',
      [
        new Question(
          1,
          'What is the boiling point of water?',
          ['100°C', '90°C', '80°C', '110°C'],
          '100°C',
          '5'
        ),
        new Question(
          2,
          'Which gas do plants absorb from the atmosphere?',
          ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
          'Carbon Dioxide',
          '5'
        ),
      ],
      110,
      true,
      70
    ),
    new Assessment(
      11,
      'Literature Assessment',
      'A11',
      new Date(),
      '9:00 AM',
      [
        new Question(
          1,
          'Which gas do plants absorb from the atmosphere?',
          ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
          'Carbon Dioxide',
          '5'
        ),
        new Question(
          2,
          'Who is known as the father of modern physics?',
          ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
          'Albert Einstein',
          '5'
        ),
      ],
      111,
      true,
      70
    ),
    new Assessment(
      12,
      'Physics Fundamentals Assessment',
      'A12',
      new Date(),
      '10:00 AM',
      [
        new Question(
          1,
          'Who is known as the father of modern physics?',
          ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Galileo Galilei'],
          'Albert Einstein',
          '5'
        ),
        new Question(
          2,
          'What is the smallest prime number?',
          ['0', '1', '2', '3'],
          '2',
          '5'
        ),
      ],
      112,
      false,
      30
    ),
    new Assessment(
      13,
      'Physics Fundamentals Assessment',
      'A13',
      new Date(),
      '11:00 AM',
      [
        new Question(
          1,
          'What is the smallest prime number?',
          ['0', '1', '2', '3'],
          '2',
          '5'
        ),
        new Question(
          2,
          'Which country is famous for the Eiffel Tower?',
          ['USA', 'UK', 'France', 'Italy'],
          'France',
          '5'
        ),
      ],
      113,
      false,
      50
    ),
    new Assessment(
      14,
      'Computer Science Basics Assessment',
      'A14',
      new Date(),
      '12:00 PM',
      [
        new Question(
          1,
          'Which country is famous for the Eiffel Tower?',
          ['USA', 'UK', 'France', 'Italy'],
          'France',
          '5'
        ),
        new Question(
          2,
          'What is the main language spoken in Brazil?',
          ['Spanish', 'Portuguese', 'English', 'French'],
          'Portuguese',
          '5'
        ),
      ],
      114,
      true,
      60
    ),
    new Assessment(
      15,
      'Computer Science Basics Assessment',
      'A15',
      new Date(),
      '1:00 PM',
      [
        new Question(
          1,
          'What is the main language spoken in Brazil?',
          ['Spanish', 'Portuguese', 'English', 'French'],
          'Portuguese',
          '5'
        ),
        new Question(
          2,
          'What is the hardest natural substance on Earth?',
          ['Gold', 'Diamond', 'Iron', 'Graphite'],
          'Diamond',
          '5'
        ),
      ],
      115,
      false,
      70
    ),
    new Assessment(
      16,
      'Economics Fundamentals Assessment',
      'A16',
      new Date(),
      '2:00 PM',
      [
        new Question(
          1,
          'What is the hardest natural substance on Earth?',
          ['Gold', 'Diamond', 'Iron', 'Graphite'],
          'Diamond',
          '5'
        ),
        new Question(
          2,
          'Which element is essential for human respiration?',
          ['Oxygen', 'Carbon', 'Nitrogen', 'Hydrogen'],
          'Oxygen',
          '5'
        ),
      ],
      116,
      false,
      40
    ),
    new Assessment(
      17,
      'Economics Fundamentals Assessment',
      'A17',
      new Date(),
      '3:00 PM',
      [
        new Question(
          1,
          'Which element is essential for human respiration?',
          ['Oxygen', 'Carbon', 'Nitrogen', 'Hydrogen'],
          'Oxygen',
          '5'
        ),
        new Question(
          2,
          'What is the capital of Australia?',
          ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
          'Canberra',
          '5'
        ),
      ],
      117,
      true,
      70
    ),
    new Assessment(
      18,
      'Geography Assessment',
      'A18',
      new Date(),
      '4:00 PM',
      [
        new Question(
          1,
          'What is the capital of Australia?',
          ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
          'Canberra',
          '5'
        ),
        new Question(
          2,
          'What gas is produced by burning fossil fuels?',
          ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Sulfur Dioxide'],
          'Carbon Dioxide',
          '5'
        ),
      ],
      118,
      true,
      70
    ),
    new Assessment(
      19,
      'Geography Assessment',
      'A19',
      new Date(),
      '5:00 PM',
      [
        new Question(
          1,
          'What gas is produced by burning fossil fuels?',
          ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Sulfur Dioxide'],
          'Carbon Dioxide',
          '5'
        ),
        new Question(
          2,
          'Which ocean is the largest?',
          ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
          'Pacific',
          '5'
        ),
      ],
      119,
      true,
      20
    ),
    new Assessment(
      20,
      'General Knowledge Assessment',
      'A20',
      new Date(),
      '6:00 PM',
      [
        new Question(
          1,
          'Which ocean is the largest?',
          ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
          'Pacific',
          '5'
        ),
        new Question(
          2,
          'What is the capital of France?',
          ['Paris', 'Berlin', 'Madrid', 'Rome'],
          'Paris',
          '5'
        ),
      ],
      120,
      false,
      70
    )       
  ];

  constructor(){}

  getAllAssessments(): Assessment[]{
    return this.assessments
  }

  getAssessmentById(id:number):Assessment{
    let a = new Assessment(
      0,
    '',
    '',
    new Date(),
    '',
    [new Question(0, '', [], '','')],
    0,
    true,
    0
    )
    for(var i=0; i<this.assessments.length; i++){
      if(this.assessments[i].id == id){
        console.log(this.assessments[i])
        return this.assessments[i]
      }
    }
    return a
  }

  addAssessment(assessment: Assessment): void{
    this.assessments.push(assessment)
  }

  updateAssessment(updatedAssessment: Assessment): void {
    const index = this.assessments.findIndex(
      (assessment) => assessment.id === updatedAssessment.id
    );
    if (index !== -1) {
      this.assessments[index] = updatedAssessment;
    }
  }
}
