import { Question } from "./question"

export class Assessment{
    id:number
    assessmentNo:string
    assessmentName:string
    assessmentDate:Date
    assessmentTime:string
    questions:Question[] 
    facultyId:number
    isActive:boolean
    price:number

    constructor(id:number,
        assessmentName:string,
        assessmentNo:string,
        assessmentDate:Date,
        assessmentTime:string,
        questions:Question[],
        facultyId:number,
        isActive:boolean,
        price:number)
    {
        this.id = id;
        this.assessmentName = assessmentName
        this.assessmentNo = assessmentNo
        this.assessmentTime = assessmentTime
        this.assessmentDate = assessmentDate
        this.questions = questions
        this.facultyId = facultyId
        this.isActive = isActive
        this.price = price
    }
}