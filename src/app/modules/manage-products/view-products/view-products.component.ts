import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.getProducts()
      .subscribe(
        (res: any) => {
          this.products = res.data;
          console.log(this.products);
        }
      );
  }

}
