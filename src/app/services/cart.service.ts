import { Injectable } from '@angular/core';
import { CartSaptarshi } from '../Models/cartsaptarshi';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carts: CartSaptarshi[] = []
  constructor() { }
}
