import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ConstService } from 'src/app/core/const/const.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];
  totalItems: any

  constructor(
    private http: HttpService,
    private auth: AuthService,
    private CONST: ConstService
  ) { }





  ngOnInit() {
    this.http.getCart().subscribe(
      (res: any) => {

        this.cart = res.data.carts;
        this.totalItems = res.data.totalItems[0];


      }
    );
  }
  updateQuantity(item: any, isAddition: boolean) {
    if (isAddition) {
      this.http.updateQuantity(item._id, item.quantity + 1).subscribe((res: any) => {

      });
      this.cart[this.cart.indexOf(item)].quantity = item.quantity + 1;
    } else {
      this.http.updateQuantity(item._id, item.quantity - 1).subscribe((res: any) => {

      });
      this.cart[this.cart.indexOf(item)].quantity = item.quantity - 1;
    }
  }

  delete(item) {

  }

  placeOrder() {
    this.http.placeOrder()
      .subscribe(
        (res: ServerResponse) => {

        }
      )
  }

}

