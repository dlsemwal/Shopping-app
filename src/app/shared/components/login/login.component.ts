import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerResponse } from '../../interfaces/server-response';
import { User } from '../../interfaces/user';
import { LoginUser } from '../../interfaces/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signup: boolean = false;
  isInvalid: boolean;

  constructor(
    private auth: AuthService,
    private modalService: NgbModal
  ) { }



  ngOnInit() {

  }
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent);
  }

  onSignUp(data: User, close?: any) {
    this.isInvalid = false;
    this.auth.signup(data)
      .subscribe(
        (res: ServerResponse) => {
          if (res.success) {
            close('Close click');

          }
        }
      );

  }

  onLogin(formData?: LoginUser, close?: any) {
    this.isInvalid = false;
    this.auth.login(formData)
      .subscribe(
        (result: boolean) => {
          if (result) {
            close('Close click');
          } else {
            this.isInvalid = true;
          }
        }
      );


  }
}
