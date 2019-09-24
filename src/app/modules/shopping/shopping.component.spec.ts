import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShoppingComponent } from "./shopping.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

describe("ShoppingComponent", () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingComponent],
      imports: [FormsModule, RouterModule.forRoot([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
