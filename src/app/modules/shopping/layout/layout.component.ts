import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { CommonService } from '../../../core/services/common.service';

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
  constructor(common: CommonService, private http: HttpService) {
    common.getShoppingProd().subscribe(x => {
      this.res = x
      this.camImages = this.res.camera;
      this.camImages = this.camImages.slice(0, 4);
      this.phoneImages = this.res.phone;
      this.phoneImages = this.phoneImages.slice(0, 4);
    });
  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.http.getCategories().subscribe(res => {
      this.categories = res['data'];
      this.categories.map(ele => {
        this.http.getProductsByCat(ele._id, 4).subscribe(res => {
          ele.data = res['data'];
        });
      })
    })
  }


  

}
