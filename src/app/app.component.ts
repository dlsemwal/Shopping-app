import { Component } from '@angular/core';
import { LStorageService } from './core/services/l-storage.service';
import { CartService } from './core/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './core/authentication/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signup = false;
  constructor(
    private lStorage: LStorageService,
    private cart: CartService,
    private auth: AuthService,
    private modalService: NgbModal
  ) { }


  login(formData?) {
    console.log(formData);

    // this.auth.login(formData);
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent);
  }

  signUp(data) {
    console.log(data);

    this.auth.signup(data);
  }
  log(x?, y?) {
    console.log(x, y);
  }
}
