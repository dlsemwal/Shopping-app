import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  constructor(private common: CommonService) { }

  showUsers() {
    this.common.getUsers()
      .subscribe((data) => {
        this.user = data;

      });
  }

  ngOnInit() {
    this.showUsers();
  }

}
