import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../../shared/services/common.service';

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
    this.common.getShoppingProd().subscribe(x => {
      // tslint:disable-next-line:triple-equals
      const res: any = x;
        this.product = res.camera.filter((value: any) => value.id == id);
      this.product = this.product[0];
    });
  }



  ngOnInit() {
  }

}
