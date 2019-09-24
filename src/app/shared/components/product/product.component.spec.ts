import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductComponent } from "./product.component";
import { RouterModule } from "@angular/router";
import { SummaryPipe } from "../../Pipes/summary.pipe";
import { HttpClientModule } from '@angular/common/http';

describe("ProductComponent", () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, SummaryPipe],
      imports: [HttpClientModule, RouterModule.forRoot([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
