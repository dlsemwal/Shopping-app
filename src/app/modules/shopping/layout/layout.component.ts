import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  categories;
  products;
  res;
  phoneImages;
  camImages;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.http.getCategories().subscribe(res => {
      this.categories = res['data'];
      this.categories.map(ele => {
        this.http.getProductsByCat(ele._id, 4).subscribe(res => {
          ele.data = res['data'];
        },
          err => console.log('err2', err)

        );
      });
    },
      err => console.log('err3', err)

    );
  }




}
