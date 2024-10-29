export class AssessmentScoreSaptarshi {
    id: number
    assessmentId: number // Reference to Assessment
    traineeId: number // Reference to Trainee
    score: number // Score obtained

    constructor(id: number, assessmentId:number, traineeId:number, score:number)
    {
        this.id = id
        this.assessmentId = assessmentId
        this.traineeId = traineeId
        this.score = score
    }
  }
  