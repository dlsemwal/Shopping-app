import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];
  get totalQuantity() {
    if (this.cart) {
      return this.cart.map(
        (value: any) => value.quantity
      ).reduce((
        sum, value: any) => sum + value
      );
    } else {
      return 0;
    }
  }
  get totalAmount() {
    if (this.cart) {
      return this.cart.map(
        (item: any) => item.product_id.price
          * (1 - item.product_id.discount / 100)
          * item.quantity
      ).reduce((
        sum, value: any) => sum + value
      );
    } else {
      return 0;
    }
  }

  constructor(private http: HttpService, private auth: AuthService) { }

  ngOnInit() {
    this.http.getCart().subscribe((res: any) => {
      this.cart = res.data;
      console.log(this.cart, this.totalQuantity);

    }
      , (err) => {
        console.log(err);
      });
  }
  updateQuantity(item: any, isAddition: boolean) {
    if (isAddition) {
      this.http.updateQuantity(item._id, item.quantity + 1).subscribe((res: any) => {
        console.log(res);

      });
      this.cart[this.cart.indexOf(item)].quantity = item.quantity + 1;
    } else {
      this.http.updateQuantity(item._id, item.quantity - 1).subscribe((res: any) => {
        console.log(res);

      });
      this.cart[this.cart.indexOf(item)].quantity = item.quantity - 1;
    }
  }


}
