 export class Question
{
    id:number
    qText:string
    options:string[]
    answer:string
    points: string

    constructor(id:number,qText:string, options:string[], answer:string, points: string)
    {
        this.id = id
        this.qText = qText
        this.answer = answer
        this.options = options
        this.points = points
    }
}