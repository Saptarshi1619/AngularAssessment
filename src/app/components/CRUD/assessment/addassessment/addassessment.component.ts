import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Assessment } from '../../../../Models/assessment';
import { Question } from '../../../../Models/question';
import { AssessmentService } from '../../../../services/assessment.service';

@Component({
  selector: 'app-addassessment',
  templateUrl: './addassessment.component.html',
  styleUrl: './addassessment.component.scss'
})
export class AddassessmentComponent {
  isLinear: boolean = false;
  count: number = 0;

  assessmentDetailsForm: FormGroup;
  assessmentTimeForm: FormGroup;
  questionForm: FormGroup;
  questionFormGroup: FormGroup;

  assessment: Assessment;

  assessmentArr: Assessment[] = [];
  questionArr: Question[] = [];

  constructor(private fb: FormBuilder, private assessServ: AssessmentService) {
    this.assessmentDetailsForm = this.fb.group({
      nameCtrl: ['', Validators.required],
      assessmentNoCtrl: ['', Validators.required],
      facultyIdCtrl: [null, Validators.required], // Faculty reference
      priceCtrl: [0, [Validators.required, Validators.min(0)]], // Minimum price validation
    });

    this.assessmentTimeForm = this.fb.group({
      assessmentDateCtrl: [null, Validators.required], // Date
      assessmentTimeCtrl: ['', Validators.required], //
    });

    this.questionFormGroup = fb.group({
      questCtrl: ['', Validators.required],
    });

    this.questionForm = fb.group({
      questions: fb.array([this.createQuestGrp()]),
    });

    this.assessment = new Assessment(
      0,
      '',
      '',
      new Date(),
      '',
      this.questionArr,
      0,
      true,
      0
    );
    this.questionArr.forEach((quest) => (quest.options = []));
  }

  createQuestGrp(): FormGroup {
    this.count++;
    return new FormGroup({
      questionText: new FormControl('', Validators.required),
      opt1: new FormControl('', Validators.required),
      opt2: new FormControl('', Validators.required),
      opt3: new FormControl('', Validators.required),
      opt4: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),
      points: new FormControl('', Validators.required),
    });
  }

  saveFirstStepData(formgrp: FormGroup) {
    console.log(formgrp);
  }
  saveSecondStepData(formgrp: FormGroup) {
    console.log(formgrp);
  }

  saveQuestionData(formgrp: FormGroup) {
    console.log(formgrp);
  }

  questionsArr(): FormArray {
    return this.questionForm.get('questions') as FormArray;
  }

  addQuestionFormGroup() {
    const product_itineries = this.questionForm.get('questions') as FormArray;
    product_itineries.push(this.createQuestGrp());
  }

  removeQuestion(i: number) {
    const quests = this.questionForm.get('questions') as FormArray;
    if (quests.length > 1) {
      quests.removeAt(i);
    } else {
      quests.reset();
    }
  }

  createAssessment() {
    const assessmentDetails = this.assessmentDetailsForm.value;
    const assessmentTime = this.assessmentTimeForm.value;
    const questionForms = this.questionsArr().controls;

    // Populate the assessment object
    this.assessment.id = this.assessServ.getAllAssessments().length + 1;
    this.assessment.assessmentName = assessmentDetails.nameCtrl;
    this.assessment.assessmentNo = assessmentDetails.assessmentNoCtrl;
    this.assessment.assessmentDate = assessmentTime.assessmentDateCtrl;
    this.assessment.assessmentTime = assessmentTime.assessmentTimeCtrl;
    this.assessment.facultyId = assessmentDetails.facultyIdCtrl;
    this.assessment.price = assessmentDetails.priceCtrl;

    // Convert form data to Question_Anirban objects and add to assessment
    this.assessment.questions = questionForms.map((qForm, index) => {
      const qData = qForm.value;
      return new Question(
        index + 1, // Auto-generate question ID based on position
        qData.questionText,
        [qData.opt1, qData.opt2, qData.opt3, qData.opt4], // Array of options
        qData.answer,
        qData.points
      );
    });

    // Print the compiled assessment object
    console.log(this.assessment);
    this.assessServ.addAssessment(this.assessment);
  }
}
