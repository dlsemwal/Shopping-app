import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';
import { CartService } from '../../../core/services/cart.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  title = 'Camera';
  images;
  constructor(common: CommonService, private cart: CartService) {
    common.getShoppingProd().subscribe(x => {
      const res :any = x
      this.images = res.camera;
    });
  }

  ngOnInit() {
  }


}
