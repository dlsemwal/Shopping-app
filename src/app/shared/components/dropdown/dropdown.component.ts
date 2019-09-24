import { Component, OnInit } from "@angular/core";
import { LStorageService } from "src/app/core/services/l-storage.service";
import { AuthService } from "src/app/core/authentication/auth.service";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  userName: string;

  constructor(
    private localService: LStorageService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.userName = this.localService.userName;
  }

  logout() {
    this.auth.logout();
  }
}
