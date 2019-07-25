import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { HttpService } from '../../../../core/http/http.service';

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

  constructor(private route: ActivatedRoute, private http: HttpService) {

  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.route.params.subscribe(params => {
      this.category = params.categoryName;
      this.categoryId = params.categoryId;
      this.http.getCart().subscribe((cart: any) => {
        this.cartItems = cart.data.map((value: any) => {
          return { id: value.product_id._id, quantity: value.quantity };
        }, err => console.log('login required to fetch cart', err));
        this.http.getProductsByCat(params.categoryId)
          .subscribe((res: any) => {
            this.products = res.data;
            console.log(this.products);
            this.products.forEach(value => {

              if (this.cartItems) {
                // tslint:disable-next-line:triple-equals
                const filteredObj = this.cartItems.find(item => item.id == value._id);
                if (filteredObj) {
                  value.quantity = filteredObj.quantity;
                }
              }
            });
          });
      });
    });
  }

  updateQuantity(item, isAddition) {
    if (isAddition) {
      this.http.updateQuantity(item._id, item.quantity + 1);
      this.products[this.products.indexOf(item)].quantity = item.quantity + 1;
    } else {
      this.http.updateQuantity(item._id, item.quantity - 1);
      this.products[this.products.indexOf(item)].quantity = item.quantity - 1;
    }

  }
  addCart(item) {

  }


  // onClick() {
  //   console.log(this.cartItems);

  // }

}
