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
  userId = localStorage.getItem('userId')
  cart = new CartSaptarshi(0,0,[],[],0)
  constructor(private cartService:CartService){
    const userIdNumber = Number(this.userId)
    this.cartService.getCartById(userIdNumber).subscribe(data=>{
      this.cart = data
      console.log(data)
    })
  }
}
