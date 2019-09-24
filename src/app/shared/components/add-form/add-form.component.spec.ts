import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";

import { AddFormComponent } from "./add-form.component";

describe("AddFormComponent", () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFormComponent],
      imports: [ReactiveFormsModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

describe("unit test for AddFormComponent", () => {
  let component: AddFormComponent;

  beforeEach(() => {
    component = new AddFormComponent(null, null);
  });

  it("should create a form", () => {
    expect(component.form.contains("name")).toBeTruthy();
    expect(component.form.contains("price")).toBeTruthy();
    expect(component.form.contains("category_id")).toBeTruthy();
    expect(component.form.contains("discount")).toBeTruthy();
    expect(component.form.contains("images")).toBeTruthy();
    expect(component.form.contains("warranty")).toBeTruthy();
    expect(component.form.contains("general")).toBeTruthy();
  });

  it("should make name control required", () => {
    let control = component.form.get("name");

    control.setValue("");

    expect(control.valid).toBeFalsy();
  });

  it("should make price control required", () => {
    let control = component.form.get("price");

    control.setValue("");

    expect(control.valid).toBeFalsy();
  });

  it("should make category_id control required", () => {
    let control = component.form.get("category_id");

    control.setValue("");

    expect(control.valid).toBeFalsy();
  });

  it("should make discount control required", () => {
    let control = component.form.get("discount");

    control.setValue("");

    expect(control.valid).toBeFalsy();
  });

  it("should make warranty control required", () => {
    let control = component.form.get("warranty");

    control.setValue("");

    expect(control.valid).toBeFalsy();
  });
});
