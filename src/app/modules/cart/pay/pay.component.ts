import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  StripeService,
  ElementOptions,
  ElementsOptions,
  StripeCardComponent
} from 'ngx-stripe';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  // @Input('amount') 
  amount;

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.amount = this.route.snapshot.paramMap.get('amount')
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  buy() {

    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
        } else if (result.error) {
        }
      });
  }
}
