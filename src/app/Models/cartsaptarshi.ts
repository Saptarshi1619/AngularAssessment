import { Assessment } from "./assessment";

export class CartSaptarshi{
    id: number;
    userId: number;
    arrAssessments: Assessment[];
    arrAId: number[];
    quantity: number;

    constructor(id: number,
        userId: number,
        arrAssessments: Assessment[],
        arrAId: number[],
        quantity: number){
            this.id = id;
            this.userId = userId
            this.arrAssessments = arrAssessments
            this.arrAId = arrAId
            this.quantity = quantity
        }
}