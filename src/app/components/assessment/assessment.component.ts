import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Assessment } from '../../Models/assessment';
import { Question } from '../../Models/question'
import { match } from 'node:assert';
import { CartService } from '../../services/cart.service';
import { CartSaptarshi } from '../../Models/cartsaptarshi';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss'
})
export class AssessmentComponent implements OnInit{
  @Input() assessmentDetail:Assessment = new Assessment(
    0,
    '',
    '',
    new Date(),
    '',
    [new Question(0, '', [], '', '')],
    0,
    true,
    0
  );
  @Output() checkPrice:EventEmitter<number>

  userId = localStorage.getItem('userId')
  cart = new CartSaptarshi(0,0,[],[],0)
  constructor(private cartService:CartService){
    this.checkPrice = new EventEmitter<number>
    const userIdNumber = Number(this.userId)
    this.cartService.getCartById(userIdNumber).subscribe(data=>{
      this.cart = data
    })
  }

  ngOnInit(): void {
    this.emitPrice()
  }

  emitPrice(){
    this.checkPrice.emit(this.assessmentDetail.price)
  }

  @Input() arrAssessment:Assessment[] = []
  @Input() searchValue:string = ""
  // ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
  //   console.log(this.searchValue)
  //   for(var i = 0; i<this.arrAssessment.length; i++)
  //   {
  //     // console.log(this.arrAssessment[i].assessmentName.includes(this.searchValue))
  //     if(this.arrAssessment[i].assessmentName.includes(this.searchValue)){
  //       console.log('match', this.arrAssessment[i].assessmentName)
  //     }
  //   }
  // }

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  addToCart(aId: number){
    if(this.cart.arrAId.includes(aId)){
      let pos = this.cart.arrAId.indexOf(aId)
      this.cart.quantity = this.cart.quantity + 1;
      console.log("In If", aId)
    }
    else{
      this.cart.arrAId.push(aId)
      this.cart.quantity = this.cart.quantity + 1
      console.log("in else", aId)
    }

    this.cartService.updateCart(this.cart).subscribe(data=>{
      console.log('Cart for userId' + data.id + 'is Updated')
    })
  }
}
