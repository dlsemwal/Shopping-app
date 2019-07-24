import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;

  constructor(private http: HttpService, private auth: AuthService) { }

  ngOnInit() {
    this.http.getCart().subscribe(this.httpRes, (err) => {
        console.log('working', err)
      } )
  }


  httpRes(res) {
    console.log(res);
  }


}

