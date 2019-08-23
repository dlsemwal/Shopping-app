import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Product } from '../../interfaces/product';
import { ServerResponse } from '../../interfaces/server-response';
import { errorImage } from 'src/app/configs/config';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') product: any;
  errImg = errorImage;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    console.log(this.product);

    // this.getProduct()
  }
  updateQuantity(item, isAddition) {
    if (isAddition) {
      this.http.updateQuantity(item.data._id, item.info.quantity + 1)
        .subscribe(
          (res: ServerResponse) => console.log(res)
        );
      this.product.info.quantity = item.info.quantity + 1;
    } else {
      this.http.updateQuantity(item._id, item.info.quantity - 1)
        .subscribe(
          (res: ServerResponse) => console.log(res)
        );
      this.product.info.quantity = item.info.quantity - 1;
    }

  }
  addToCart(item) {
    this.http.addToCart(item.data._id)
      .subscribe(
        (res: ServerResponse) => console.log(res)
      );
    this.product.info.quantity = 1;
  }


  onClick() {
    console.log(this.product);
  }


}
