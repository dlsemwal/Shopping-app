import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  StripeService,
  ElementOptions,
  ElementsOptions,
  StripeCardComponent
} from 'ngx-stripe';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { ServerResponse } from 'src/app/shared/interfaces/server-response';
import { ConstService } from 'src/app/core/const/const.service';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  amount: number;
  token: object;
  order_id: string;
  isPaid: boolean

  cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private route: ActivatedRoute,
    private http: HttpService,
    public CONST: ConstService
  ) { }

  ngOnInit() {
    this.amount = +this.route.snapshot.paramMap.get('amount');
    this.order_id = this.route.snapshot.paramMap.get('id');
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
    console.log(this.amount, this.order_id);

  }

  pay(
    id: string,
    amount: number,
    token: object
  ) {
    this.http.payement(id, amount, token)
      .subscribe(
        (res: ServerResponse) => {
          console.log(res.data);

          if (res.success) this.isPaid = true
        }
      )
  }

  buy() {

    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(
        this.card.getCard(),
        { name }
      ).subscribe(
        result => {
          if (result.token) {
            console.log(result.token);
            this.token = result.token;
            this.pay(
              this.order_id,
              Math.ceil(this.amount),
              this.token
            )

          } else if (result.error) {
          }
        }
      );
  }
}
