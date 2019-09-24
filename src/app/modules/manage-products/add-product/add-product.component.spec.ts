import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddProductComponent } from "./add-product.component";
import { AddFormComponent } from "src/app/shared/components/add-form/add-form.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

describe("AddProductComponent", () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductComponent, AddFormComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
