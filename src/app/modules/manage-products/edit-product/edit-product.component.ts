import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConstService } from 'src/app/core/const/const.service';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"]
})
export class EditProductComponent implements OnInit {
  productId: string;
  product$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    public CONST: ConstService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.product$ = this.http.getProductById(this.productId);
  }
}
