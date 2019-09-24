import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewProductsComponent } from "./view-products.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { RouterModule } from "@angular/router";
import { SummaryPipe } from "src/app/shared/Pipes/summary.pipe";
import { HttpClientModule } from "@angular/common/http";

describe("ViewProductsComponent", () => {
  let component: ViewProductsComponent;
  let fixture: ComponentFixture<ViewProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductsComponent, SummaryPipe],
      imports: [
        InfiniteScrollModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
