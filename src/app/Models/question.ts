 export class Question
{
    id:number
    qText:string
    options:string[]
    answer:string
    qType:string

    constructor(id:number,qText:string, options:string[], answer:string, qType:string)
    {
        this.id = id
        this.qText = qText
        this.answer = answer
        this.options = options
        this.qType = qType
    }
}