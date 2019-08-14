import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { BrandCount } from 'src/app/shared/interfaces/brand';
import { ConstService } from 'src/app/core/const/const.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  category;
  categoryId;
  products: any[];
  cartItems;
  categories;
  page: number;
  limit: number = 10;
  brand: string;
  brands: BrandCount[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private CONST: ConstService
  ) {

  }

  getCat() {
    this.http.getCategories().subscribe(
      (res: ServerResponse) => {
        this.categories = res.data;
        console.log(this.categories);

      }
    )
  }
  getBrands(id) {
    this.http.getBrandsByCat(id)
      .subscribe(
        (res: ServerResponse) => {
          this.brands = res.data
        }
      )
  }
  getProducts(id, pg, lim, br) {
    this.http.getAllProducts(id, pg, lim, br)
      .subscribe(
        (res: ServerResponse) => {
          this.products = res.data
        }
      )
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.category = params.get('categoryName');
        this.categoryId = params.get('categoryId');
        this.page = 1;
        this.brand = null;
        this.getProducts(
          this.categoryId,
          this.page,
          this.limit,
          this.brand
        );
        this.getBrands(this.categoryId);
      }
    )

    this.getCat()

  }

  changeCat(item) {
    this.router.navigate(['/products', item.name, item._id])
  }

  changeBrand(id) {
    this.brand = id;
    this.page = 1;
    this.getProducts(
      this.categoryId,
      this.page,
      this.limit,
      this.brand
    )

  }
  getAllProducts() {
    this.brand = null;
    this.page = 1;
    this.getProducts(
      this.categoryId,
      this.page,
      this.limit,
      this.brand
    )
  }
  
  onScroll() {
    this.page += 1;
    this.http.getAllProducts(
      this.categoryId,
      this.page,
      this.limit,
      this.brand
    ).subscribe(
      (res: ServerResponse) => {
        this.products = this.products.concat(res.data)
        console.log(this.products);

      }
    )
  }

}
