import { Component } from '@angular/core';
import { Assessment } from '../../../../Models/assessment';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssessmentService } from '../../../../services/assessment.service';
import { Question } from '../../../../Models/question';

@Component({
  selector: 'app-updateassessment',
  templateUrl: './updateassessment.component.html',
  styleUrl: './updateassessment.component.scss'
})
export class UpdateassessmentComponent {
  isLinear = true;

  assessments: Assessment[] = [];
  selectedAssessment?: Assessment;

  // Step forms
  selectAssessmentForm: FormGroup;
  editDetailsForm: FormGroup;
  editQuestionsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private assessmentService: AssessmentService
  ) {
    // Initialize form controls for each step
    this.selectAssessmentForm = this.fb.group({
      selectedAssessmentId: ['', Validators.required],
    });

    this.editDetailsForm = this.fb.group({
      name: ['', Validators.required],
      assessmentNo: ['', Validators.required],
      facultyId: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      date: [null, Validators.required],
      time: ['', Validators.required],
    });

    this.editQuestionsForm = this.fb.group({
      questions: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    // Load all assessments on init for dropdown selection
    this.assessments = this.assessmentService.getAllAssessments();
  }

  // Helper method to get questions as FormArray
  get questions(): FormArray {
    return this.editQuestionsForm.get('questions') as FormArray;
  }

  // Step 1: Handle assessment selection and prefill forms for next steps
  onSelectAssessment() {
    const selectedId = this.selectAssessmentForm.value.selectedAssessmentId;
    this.selectedAssessment =
      this.assessmentService.getAssessmentById(selectedId);

    if (this.selectedAssessment) {
      // Prefill Step 2 (Edit Details) form
      this.editDetailsForm.patchValue({
        name: this.selectedAssessment.assessmentName,
        assessmentNo: this.selectedAssessment.assessmentNo,
        facultyId: this.selectedAssessment.facultyId,
        price: this.selectedAssessment.price,
        date: this.selectedAssessment.assessmentDate,
        time: this.selectedAssessment.assessmentTime,
      });

      // Prefill Step 3 (Edit Questions) form with existing questions
      this.questions.clear();
      this.selectedAssessment.questions.forEach((question) => {
        this.questions.push(this.createQuestionFormGroup(question));
      });
    }
  }

  // Creates a FormGroup for each question, prefilled with data if provided
  createQuestionFormGroup(question?: Question): FormGroup {
    return this.fb.group({
      questionText: [question?.qText || '', Validators.required],
      opt1: [question?.options[0] || '', Validators.required],
      opt2: [question?.options[1] || '', Validators.required],
      opt3: [question?.options[2] || '', Validators.required],
      opt4: [question?.options[3] || '', Validators.required],
      answer: [question?.answer || '', Validators.required],
      points: [question?.points || '', Validators.required],
    });
  }

  // Step 2: Save edited assessment details
  saveAssessmentDetails() {
    if (this.selectedAssessment) {
      Object.assign(this.selectedAssessment, this.editDetailsForm.value);
    }
  }

  // Step 3: Save edited questions
  saveQuestions() {
    if (this.selectedAssessment) {
      const updatedQuestions = this.questions.controls.map((control, index) => {
        const formData = control.value;
        return new Question(
          index + 1,
          formData.questionText,
          [formData.opt1, formData.opt2, formData.opt3, formData.opt4],
          formData.answer,
          formData.points
        );
      });
      this.selectedAssessment.questions = updatedQuestions;
    }
  }

  // Save the full assessment after all steps are completed
  saveFullAssessment() {
    if (this.selectedAssessment) {
      this.assessmentService.updateAssessment(this.selectedAssessment);
      console.log('Assessment updated:', this.selectedAssessment);
    }
  }
}
