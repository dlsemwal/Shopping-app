import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup = false;

  constructor(private auth: AuthService, private modalService: NgbModal) { }

  login(formData?) {
    console.log(formData);

    // this.auth.login(formData);
  }

  ngOnInit() {
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
