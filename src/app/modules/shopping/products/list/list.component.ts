import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../shared/services/http/http.service';
import { log } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  category;
  categoryId;
  products;

  constructor(private route: ActivatedRoute, private http: HttpService) {
    this.getProducts()
  }

  ngOnInit() {

  }
  getProducts() {
    this.route.params.subscribe(params => {
      this.category = params.categoryName;
      this.categoryId = params.categoryId
      this.http.getProductsByCat(params.categoryId).subscribe(res => this.products = res['data'])
    })
  }
  onClick() {
    console.log(this.products, this.category, this.categoryId);

  }

}
