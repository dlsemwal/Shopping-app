import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ConstService } from 'src/app/core/const/const.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[];
  totalItems: any
  isEmpty: boolean

  constructor(
    private http: HttpService,
    private auth: AuthService,
    private CONST: ConstService,
    private router: Router
  ) { }





  ngOnInit() {
    this.http.getCart().subscribe(
      (res: any) => {
        if (res.data.carts.length && res.data.totalItems.length) {
          this.cart = res.data.carts;
          console.log(this.cart);
        } else this.isEmpty = true;
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
    this.http.deleteCart(item._id)
      .subscribe(
        res => console.log(res)

      )
  }

  placeOrder() {
    this.http.placeOrder()
      .subscribe(
        (res: ServerResponse) => {
          console.log(res);
          if (res.data._id && res.success && res.data.order_total_price) {
            this.router.navigate(['/cart', 'pay', res.data._id, res.data.order_total_price])
          }


        }
      )
  }

}

