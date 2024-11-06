import { Component } from '@angular/core';
import { Assessment } from '../../Models/assessment';
import { Question } from '../../Models/question';
import { ActivatedRoute, Params } from '@angular/router';
import { AssessmentService } from '../../services/assessment.service';
import { AttendanceSaptarshi } from '../../Models/attendancesaptarshi';
import { AttendanceService } from '../../services/attendance.service';

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

  // Timer variables
  seconds: number = 600; // 10 minutes in seconds
  minutes: number = Math.floor(this.seconds / 60);
  timer: any;

  // Array to store the selected answers by the user
  selectedAnswers: string[] = [];

  // Store the total marks obtained
  totalMarks: number | null = null;

  constructor(private activatedRoute: ActivatedRoute, private assessmentService: AssessmentService, private attendanceService: AttendanceService) {


    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params['id']);
      let aId = parseInt(params['id']);
      this.assessmentService.getAssessmentById(aId).subscribe(data => {
        this.assessment = data;
      });
    });

    const traineeId = localStorage.getItem('userId');
    const traineeIdNumber = Number(traineeId)

    this.attendanceService.getAllAttendance().subscribe({
      next: (attendanceRecords) => {
        // Generate a new ID for the attendance record based on the current length of the attendance array
        const newId = attendanceRecords.length + 1;
  
        const attendanceRecord: AttendanceSaptarshi = {
          id: newId, // Assign the new ID
          traineeId: traineeIdNumber, // Get traineeId from localStorage
          assessmentId: this.assessment.id, // Use the current assessment ID
          attended: true,
          date: new Date()
        };
  
        // Call the AttendanceService to add the attendance record
        this.attendanceService.addAttendance(attendanceRecord).subscribe({
          next: (response) => {
            console.log('Attendance record added:', response);
            //alert('Your assessment has been submitted, and attendance has been recorded.');
          },
          error: (error) => {
            console.error('Error adding attendance:', error);
            //alert('Failed to record attendance. Please try again.');
          }
        });
  
        // Stop the timer after submission
        clearInterval(this.timer);
        //alert('Your assessment has been submitted!');
      },
      error: (error) => {
        console.error('Error fetching attendance records:', error);
        //alert('Failed to fetch attendance records. Please try again.');
      }
    });
  }

  ngOnInit(): void {
    this.startTimer(); // Start the timer when the component initializes
  }

  // Start the countdown timer
  startTimer(): void {
    this.timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
        this.minutes = Math.floor(this.seconds / 60);
      } else {
        clearInterval(this.timer); // Stop the timer when it reaches 0
        this.submitAssessment(); // Automatically submit when time is up
      }
    }, 1000); // Update the timer every second
  }

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
  calculateTotalMarks(): void {
    let marks = 0;
    this.selectedAnswers.forEach((selectedAnswer, index) => {
      if (selectedAnswer === this.assessment.questions[index].answer) {
        // Convert the points to a number before adding to the total
        marks += parseInt(this.assessment.questions[index].points);
      }
    });
    this.totalMarks = marks;
  }

  // Submit the assessment and stop the timer
  submitAssessment(): void {
    this.calculateTotalMarks(); // Calculate total marks before submitting
    alert('Your assessment has been submitted.');
    clearInterval(this.timer); // Stop the timer when the user submits
  }

}


