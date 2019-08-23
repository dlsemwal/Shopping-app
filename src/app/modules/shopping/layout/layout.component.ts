import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  categories$ = this.http.getCategories();
  demo = {};
  demo$ = {
    isEmpty : true
  };
  categories;
  constructor(
    private http: HttpService
  ) { }

  products(name, id) {
    this.demo$.isEmpty = false;
    this.demo$[name] = this.http.getProductsByCat(id, 4);
    return true
  }


  ngOnInit() {
    this.getProducts();


  }
  getProducts() {
    this.http.getCategories().subscribe(
      (res: ServerResponse) => {
        this.categories = res.data;
        console.log(this.categories);

        this.categories.map(
          item => {
            console.log(item._id);

            this.http.getProductsByCat(item._id, 4)
              .subscribe(
                res => {
                  item.data = res['data'];
                },
                err => console.log('err2')

              );
          }
        );
      },
      err => console.log('err3', err)

    );
  }


  onClick() {
    console.log(this.demo$);

  }

}
