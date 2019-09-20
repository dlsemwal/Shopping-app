import { Component, OnInit } from '@angular/core';
import { ConstService } from 'src/app/core/const/const.service';
import { HttpService } from 'src/app/core/http/http.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders;
  constructor(
    public CONST: ConstService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.myOrders()
      .subscribe(
        (res: ServerResponse) => {
          this.orders = res.data;
          console.log(this.orders);

        }
      )
  }

}
