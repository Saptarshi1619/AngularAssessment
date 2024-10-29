export class AttendanceSaptarshi {
    id: number;
    traineeId: number; 
    assessmentId: number; 
    attended: boolean; 
    date: Date; 

    constructor(id:number, traineeId:number, assessmentId:number, attended:boolean, date:Date){
        this.id = id
        this.traineeId = traineeId
        this.assessmentId = assessmentId
        this.attended = attended
        this.date = date
    }
  }