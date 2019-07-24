import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../core/http/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  constructor(private http: HttpService, private route: ActivatedRoute) {
    this.getProduct()

  }
  getProduct() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.http.getProductById(params.productId).subscribe(res => this.product = res['data'])


    });
  }
  ngOnInit() {
  }
  onClick() {
    console.log(this.product);

  }

}
