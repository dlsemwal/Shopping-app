import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutComponent } from "./layout.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "src/app/shared/components/product/product.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SummaryPipe } from "src/app/shared/Pipes/summary.pipe";
import { HttpClientModule } from '@angular/common/http';

describe("LayoutComponent", () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        CarouselComponent,
        ProductComponent,
        SummaryPipe
      ],
      imports: [RouterModule.forRoot([]), NgbModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
