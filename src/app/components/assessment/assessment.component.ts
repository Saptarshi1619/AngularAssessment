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
  cart = new CartSaptarshi('', '', [], [], 0)
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

  addToCart(): void {
    // Get the current userId from localStorage
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.log('User is not logged in!');
      return;
    }

    const userIdNumber = Number(userId);

    // Call CartService to get the user's cart
    this.cartService.getCartById(userIdNumber).subscribe((cart: CartSaptarshi) => {
      if (cart) {
        // Check if the assessment already exists in the cart
        const existingAssessmentIndex = cart.arrAssessments.findIndex(
          (item) => item.id === this.assessmentDetail.id
        );

        if (existingAssessmentIndex >= 0) {
          // If already exists, update the quantity
          cart.quantity[existingAssessmentIndex]++;
        } else {
          // If not exists, add the new assessment with quantity 1
          cart.arrAssessments.push(this.assessmentDetail);
          cart.quantity.push(1);
        }

        // Recalculate the total price
        cart.total = cart.arrAssessments.reduce((total, item, index) => {
          return total + item.price * cart.quantity[index];
        }, 0);

        // Pass the updated cart object to the CartService to update the cart
        this.cartService.updateCart(cart).subscribe(() => {
          console.log('Assessment added to cart successfully!');
        });
      }
    });
  }


}
