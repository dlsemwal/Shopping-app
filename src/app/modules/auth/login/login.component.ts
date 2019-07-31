import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private modalService: NgbModal) { }

  login(formData) {
    this.auth.login(formData);
  }

  ngOnInit() {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { size: 'lg' });
  }

}
