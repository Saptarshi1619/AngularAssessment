import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartSaptarshi } from '../../Models/cartsaptarshi';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  userId = localStorage.getItem('userId');
  cart = new CartSaptarshi('', '', [], [], 0);

  constructor(private cartService: CartService) {
    const userIdNumber = Number(this.userId);
    this.cartService.getCartById(userIdNumber).subscribe((data) => {
      this.cart = data;
      console.log(data);
    });
  }

  // Method to update the total price when quantity changes
  updateCartTotal() {
    this.cart.total = this.cart.arrAssessments.reduce(
      (total, assessment, index) => {
        return total + assessment.price * this.cart.quantity[index];
      },
      0
    );
    console.log(this.cart);
  }

  removeAssessment(index: number) {
    // Remove the item from arrAssessments and quantity arrays
    this.cart.arrAssessments.splice(index, 1);
    this.cart.quantity.splice(index, 1);

    // Recalculate the total price after removal
    this.updateCartTotal();

    // Send the updated cart to the backend to persist changes
    this.cartService.updateCart(this.cart).subscribe(() => {
      console.log('Cart updated after deletion on the server!');
    });
  }

  // Checkout method (send the updated cart to the server)
  checkout() {
    // Send the updated cart to the backend

    this.cartService.updateCart(this.cart).subscribe(() => {
      console.log('Cart updated on the server!');
      // Implement any additional checkout logic, like redirecting the user, etc.
    });
  }

}
