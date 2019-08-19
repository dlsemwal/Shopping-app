import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Product } from '../../interfaces/product';
import { ServerResponse } from '../../interfaces/server-response';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') data: any;
  get product() {
    if (!this.data.info) return this.data
    if (this.data.info.isInCart) {
      this.data.data.quantity = this.data.info.quantity
    }
    return this.data.data
  }

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
  }
  updateQuantity(item, isAddition) {
    if (isAddition) {
      this.http.updateQuantity(item._id, item.quantity + 1)
        .subscribe(
          (res: ServerResponse) => console.log(res)
        );
      this.product.quantity = item.quantity + 1;
    } else {
      this.http.updateQuantity(item._id, item.quantity - 1)
        .subscribe(
          (res: ServerResponse) => console.log(res)
        );
      this.product.quantity = item.quantity - 1;
    }

  }
  addToCart(item) {
    this.http.addToCart(item._id)
      .subscribe(
        (res: ServerResponse) => console.log(res)
      );
    this.product.quantity = 1;
  }


  onClick() {
    console.log(this.product);
  }


}
