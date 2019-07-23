import { Component } from '@angular/core';
import { LStorageService } from './shared/services/l-storage.service';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShoppingModule() {
    const url = window.location.href;
    if (url.indexOf('/dashboard') > 0 ) {
      return false;
    } else {
      return true;
    }

  }
  constructor(private lStorage: LStorageService, private cart: CartService) {

  }

}

