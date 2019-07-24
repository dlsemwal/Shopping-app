import { Component } from '@angular/core';
import { LStorageService } from './core/services/l-storage.service';
import { CartService } from './core/services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private lStorage: LStorageService, private cart: CartService) {}


  isShoppingModule() {
    const url = window.location.href;
    if (url.indexOf('/dashboard') > 0 ) {
      return false;
    } else {
      return true;
    }

  }
  

}

