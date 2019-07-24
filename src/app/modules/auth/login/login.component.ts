import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  login(formData) {
    this.auth.login(formData);
  }

  ngOnInit() {
  }

}
