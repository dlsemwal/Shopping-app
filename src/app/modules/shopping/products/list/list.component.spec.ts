import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ProductComponent } from "src/app/shared/components/product/product.component";
import { RouterModule } from "@angular/router";
import { SummaryPipe } from "src/app/shared/Pipes/summary.pipe";
import { HttpClientModule } from "@angular/common/http";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ProductComponent, SummaryPipe],
      imports: [
        InfiniteScrollModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
