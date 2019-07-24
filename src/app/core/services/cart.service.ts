import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  // cartSbjct = new BehaviorSubject(0);

  constructor() { }

  addCart(item) {
    if(item._id) {item.id = item._id; item.cost = item.price}
    item.quantity = 1;
    this.cart.push(item);
    
  }
  getIndexFromCart(item) {
    return this.cart.findIndex(value =>  value.id === item.id);
  }
  removeFromCart(item) {
    const index: number = this.getIndexFromCart(item);
    if (index >= 0) {
      this.cart.splice(index, 1);
    } else {
      return false;
    }

  }
  get totalQuantity() {
    if (this.cart.length > 0) {
      // tslint:disable-next-line:arrow-return-shorthand
      return this.cart.map(value => value.quantity).reduce((total, value) => total + value);
    }
    return 0;
  }
  get totalAmount() {
    if (this.cart.length > 0) {
      // tslint:disable-next-line:arrow-return-shorthand
      return this.cart.map(value => value.quantity * value.cost).reduce((total, value) => total + value);
    }
    return 0;
  }
  updateQuantity(item, isQuantityAdd) {
    if (isQuantityAdd) {
      this.cart[this.getIndexFromCart(item)].quantity++;
    } else {
      if (this.cart[this.getIndexFromCart(item)].quantity < 2) {
        this.removeFromCart(item);
      } else {
        this.cart[this.getIndexFromCart(item)].quantity--;
      }
    }
  }
}
