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
  isLinear = false;
  count=0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public questionForm: FormGroup;
  assessment:Assessment = new Assessment(0,
    '',
    '',
    new Date(),
    '',
    [new Question(0, '', [], '', '')],
    0,
    true,
    0)

    arrAssessment:Assessment[] = []
    questions:Question[] = []
    arrOptions:string[] = []

  constructor(private formBuilder: FormBuilder,private assessmentService: AssessmentService){
    let data = this.assessmentService.getAllAssessments()
    this.arrAssessment = data
    console.log(data)



    this.questionForm = this.formBuilder.group({
      itineries: this.formBuilder.array([this.createQuestionFormGroup()])
    });


    this.firstFormGroup = this.formBuilder.group({
      assessmentNoCtrl: ['', Validators.required],
      nameCtrl: ['', Validators.required],
      DateCtrl: ['', Validators.required],
      timeCtrl: ['', Validators.required],
      priceCtrl: [0, Validators.required],
    })

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.assessment=new Assessment(0,
      '',
      '',
      new Date(),
      '',
      this.questions,
      0,
      true,
      0);
    this.questions.forEach(ques => {
      ques.options=[];
    })
  }
  //end of constructor


  private createQuestionFormGroup(): FormGroup {
    this.count++;
    return new FormGroup({
      'Text': new FormControl('', Validators.required),
      'Type': new FormControl(''),
      'Options': new FormControl('')
    })
  }



  questionsArr(): FormArray {
    //console.log(this.emailForm.get("emails"));
    return this.questionForm.get("questions") as FormArray
  }

  saveFirstStepData(formdata:FormGroup){
    console.log(formdata.value);


    this.assessment.assessmentNo=formdata.value.assessmentNoCtrl;
    this.assessment.assessmentName=formdata.value.nameCtrl;
    this.assessment.assessmentDate=formdata.value.dateCtrl;
    this.assessment.assessmentTime=formdata.value.timeCtrl;
    this.assessment.price=formdata.value.priceCtrl;
    console.log(this.assessment)//check console
  }

  saveSecondStepData(formdata:any){
    if (this.questionForm.valid) {
      const formData = this.questionForm.value;
      console.log(formdata.questions)
      //this.itineries=formdata.products
      formdata.itineries.forEach((fmData:any)=>{
        console.log(fmData.activities)
        //this.questions.push(new Question(0,fmData.qText,fmData.qTpye))
      })
    }
  }


  public addQuestionFormGroup() {
    const assessment_questions = this.questionForm.get('questions') as FormArray
    assessment_questions.push(this.createQuestionFormGroup())
  }
 
  public removeOrClearQuestion(i: number) {
    const assessment_questions = this.questionForm.get('questions') as FormArray
    if (assessment_questions.length > 1) {
      assessment_questions.removeAt(i)
    } else {
      assessment_questions.reset()
    }
  }
}
