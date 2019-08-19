import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { HttpResponse } from '@angular/common/http';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { Category } from 'src/app/shared/interfaces/category';
import { Product } from 'src/app/shared/interfaces/product';
import { ConstService } from 'src/app/core/const/const.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  categories: Category[];
  categoryId: string;
  products: any;
  page: number;
  limit: number = 10;

  constructor(
    private http: HttpService,
    private CONST: ConstService
  ) { }

  getProducts(id, pg, lim) {
    this.http.getAllProducts(id, pg, lim)
      .subscribe(
        (res: ServerResponse) => {
          this.products = res.data;
          console.log(this.products);

        }
      )
  }
  getCat() {
    this.http.getCategories().subscribe(
      (res: ServerResponse) => {
        this.categories = res.data;
        this.categoryId = this.categories[0]._id;
        this.page = 1;
        this.getProducts(
          this.categories[0]._id,
          this.page,
          this.limit

        )

      }
    )
  }

  ngOnInit() {
    this.getCat();

  }
  changeCat(item) {
    this.categoryId = item._id;
    this.page = 1;

    this.getProducts(
      this.categoryId,
      this.page,
      this.limit

    )
  }
  onScroll() {
    this.page += 1;
    this.http.getAllProducts(
      this.categoryId,
      this.page,
      this.limit
    ).subscribe(
      (res: ServerResponse) => {
        this.products = this.products ? this.products.concat(res.data) : res.data
        console.log(this.products);

      }
    )
  }
  delete(id) {
    this.http.deleteProduct(id)
      .subscribe(
        (res: ServerResponse) => {
          console.log(res);
        }
      )
  }


}
