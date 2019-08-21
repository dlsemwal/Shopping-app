import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  categories;
  constructor(private http: HttpService) { }

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
            this.http.getProductsByCat(item._id, 4)
              .subscribe(
                res => {
                  item.data = res['data'];
                },
                err => console.log('err2', err)

              );
          }
        );
      },
      err => console.log('err3', err)

    );
  }




}
