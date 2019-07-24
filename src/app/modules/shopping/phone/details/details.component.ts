import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productServer } from '../../../../configs/config';
import { CommonService } from '../../../../core/services/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  constructor(private common: CommonService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.getProduct(params.id);
    
  });

  }
  getProduct(id) {
    this.common.getShoppingProd(productServer).subscribe(x => {
      this.product = x;
      // tslint:disable-next-line:triple-equals
      this.product = this.product.data[1].brands.filter((value: any) => value.product._id == id);
      this.product = this.product[0];
      console.log(this.product);
      
    });
  }



  ngOnInit() {
  }

}
