import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { ConstService } from 'src/app/core/const/const.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: string;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private CONST: ConstService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.http.getProductById(this.productId)
      .subscribe(
        (res: ServerResponse) => {
          this.product = res.data;
        }
      )

  }

}
