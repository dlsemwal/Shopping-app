import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { errorImage } from 'src/app/configs/config';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  product: any;
  image: string;
  demo;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  getProduct() {
    // this.demo = this.http.getProductById(this.productId)
    this.http.getProductById(this.productId)
      .subscribe(
        (res: ServerResponse) => {
          this.product = res.data;
          this.image = this.product.images[0] || errorImage;
        }
      )

  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        params => {
          this.productId = params.get('id')
          this.getProduct()
        }
      )
  }

  imgChange(img) {
    this.image = img;
  }
  onClick() {
    console.log(this.product);

  }
}
