import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxStripeModule, StripeService } from "ngx-stripe";

import { PayComponent } from "./pay.component";
import { environment } from "src/environments/environment";

describe("PayComponent", () => {
  let component: PayComponent;
  let fixture: ComponentFixture<PayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayComponent],
      imports: [
        NgxStripeModule.forRoot(environment.stripePublishableKey),
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      providers: [StripeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
