import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '../../Models/question';
import { Assessment } from '../../Models/assessment';

@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrl: './view-assessment.component.scss'
})
export class ViewAssessmentComponent{

  name:string = ""
  

  setValues(namefld:string){
    this.name = namefld
  }

  constructor(private cdr:ChangeDetectorRef){

  }

  currentPage: number = 1; // Current page number
  assessmentsPerPage: number = 9; // Total assessments to display per page
  pagedAssessments:Assessment[] = []

  filteredAssessments:Assessment[] = []
  searchTerm:string = ""
  filterAssessments() {
    this.currentPage = 1; // Reset to first page on every new search
    const term = this.searchTerm.toLowerCase().trim();

    if (this.searchTerm === '') {
      // If search term is empty, show all assessments
      this.filteredAssessments = [...this.assessments];
    } else {
      // Filter assessments by name
      this.filteredAssessments = this.assessments.filter(assessment =>
        assessment.assessmentName.toLowerCase().startsWith(this.searchTerm)
      );
    }
    //this.cdr.detectChanges()
  }

  // Pagination logics
  get arrAssessments(): Assessment[] {
    const startIndex = (this.currentPage - 1) * this.assessmentsPerPage;
    return this.filteredAssessments.slice(
      startIndex,
      startIndex + this.assessmentsPerPage
    );
  }

  totalPages(): number {
    return Math.ceil(this.filteredAssessments.length / this.assessmentsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.filterAssessments();
    }
  }


  badgeDisplay:boolean = false
  //event handler
  getPrice(evt:any){
    if(evt>50){
      this.badgeDisplay = false
    }
    else{
      this.badgeDisplay = true
    }
    //this.cdr.detectChanges()
  }

  blnPriceCheck(pr:number):boolean{
    if(pr<50){
      return false
    }
    else{
      return true
    }
  }

  //#region Data
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
          'Objective'
        ),
        new Question(
          2,
          'What are your thoughts on artificial intelligence?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'Explain the importance of biodiversity.',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'Discuss your favorite historical figure.',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'What are the benefits of renewable energy?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'Describe a memorable trip you have taken.',
          [],
          '',
          'Subjective'
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
          [
            'Vincent van Gogh',
            'Pablo Picasso',
            'Leonardo da Vinci',
            'Claude Monet',
          ],
          'Leonardo da Vinci',
          'Objective'
        ),
        new Question(
          2,
          'What is the impact of climate change?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(2, 'How do you define success?', [], '', 'Subjective'),
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
          'Objective'
        ),
        new Question(
          2,
          'What challenges do you face in your studies?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(2, 'What motivates you to learn?', [], '', 'Subjective'),
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
          'Objective'
        ),
        new Question(
          2,
          'Describe a significant moment in your life.',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'What skills would you like to develop in the future?',
          [],
          '',
          'Subjective'
        ),
      ],
      114,
      false,
      40
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
          'Objective'
        ),
        new Question(
          2,
          'What do you think is the most pressing global issue?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'How do you balance your personal and academic life?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'What role does technology play in education?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'What are your future aspirations?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'What does teamwork mean to you?',
          [],
          '',
          'Subjective'
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
          'Objective'
        ),
        new Question(
          2,
          'What is your opinion on online education?',
          [],
          '',
          'Subjective'
        ),
      ],
      120,
      false,
      70
    ),
  ];
  //#endregion

}
