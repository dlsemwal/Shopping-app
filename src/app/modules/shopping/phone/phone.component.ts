import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
import { CartService } from '../../../shared/services/cart.service';
import { productServer } from '../../../configs/config';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  res;
  title = 'Mobile Phone';
  images;
  constructor(private common: CommonService, private cart: CartService) {
    this.common.getShoppingProd(productServer).subscribe(x => {
      this.res = x;
      this.res = this.res.data[1]
      console.log(this.res);
      
    });
  }

  ngOnInit() {
  }


}
