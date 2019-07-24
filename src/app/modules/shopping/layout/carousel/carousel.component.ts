import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-shopping-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  res;
  images;
  constructor(common: CommonService) {
    common.getShoppingProd().subscribe(x => {
      this.res = x;
      this.images = this.res.camera;
      this.images = this.images.slice(5, 8);
    });
  }
  ngOnInit() {
  }

}
