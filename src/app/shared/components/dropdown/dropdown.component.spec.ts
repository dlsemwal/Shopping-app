import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropdownComponent } from "./dropdown.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

describe("DropdownComponent", () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
