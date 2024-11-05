import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartSaptarshi } from '../../Models/cartsaptarshi';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  userId = localStorage.getItem('userId');
  cart = new CartSaptarshi('', '', [], [], 0);

  constructor(private cartService: CartService, private userService:UserService) {
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

  //Method to remove assessment from cart
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
    if (this.cart.arrAssessments.length === 0) {
      console.log("Cart is empty, cannot proceed to checkout");
      return; // Do nothing if the cart is empty
    }

    // First, store the cart's assessments into the user's data
    const userIdNumber = Number(this.userId);
    this.userService.getUserById(userIdNumber).subscribe((userData) => {
      // Assuming userData has an `assessments` array to store completed assessments
      const updatedUser = { ...userData, assessments: [...userData.assessments, ...this.cart.arrAssessments] };

      // Update the user's data with the new assessments
      this.userService.updateUser(updatedUser).subscribe(() => {
        console.log('User data updated with the new assessments!');
        
        // After saving the user data, clear the cart
        this.cart.arrAssessments = [];
        this.cart.quantity = [];
        this.cart.total = 0;

        // Optionally, update the cart on the backend to mark it as cleared
        this.cartService.updateCart(this.cart).subscribe(() => {
          console.log('Cart has been cleared!');
        });

        // Optionally, display a success message or redirect the user
        alert('Checkout successful!');
      });
    });
  }

}
