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
  message;
  constructor(
    private CONST: ConstService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.myOrders()
      .subscribe(
        (res: ServerResponse) => {
          console.log(res);

          if (typeof res.data == 'string') this.message = res.data;
          else this.orders = res.data;
          console.log(this.orders, this.message);
          


        }
      )
  }

}
