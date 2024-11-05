import { Assessment } from "./assessment";

export class CartSaptarshi{
    id: string;
    userId: string;
    arrAssessments: Assessment[];
    quantity: number[];
    total: number;

    constructor(id: string,
        userId: string,
        arrAssessments: Assessment[],
        quantity: number[],
    total:number){
            this.id = id;
            this.userId = userId
            this.arrAssessments = arrAssessments
            this.quantity = quantity
            this.total = total
        }
}