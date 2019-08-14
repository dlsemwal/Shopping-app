import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input('product') product: any;
  image: string = this.product.images[0]
  constructor() { }

  ngOnInit() {
  }

  imgChange(img) {
    this.image = img;
  }
}
