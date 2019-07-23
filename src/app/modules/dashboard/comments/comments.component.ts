import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../shared/services/common.service';
import { config } from '../../../configs/config';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  page: any;
  pages: number;
  currentPage: number;
  constructor(private common: CommonService, private router: Router, private route: ActivatedRoute) {
    this.getComments();
  }

  getComments() {
    this.common.getImg()
      .subscribe((data) => {
        this.comments = data;
        this.pages = Math.ceil(this.comments.length / config.perPageData);
        this.getPage(1);
      });
  }
  next(i) {
    this.getPage(+i + 1);
  }
  previous(i) {
    this.getPage(+i - 1);
  }
  getPage(i) {

    if (i >= 1 && i <= this.pages) {

      this.page = this.comments.slice(10 * (i - 1), i * 10);
      this.currentPage = +i;
      this.route.params.subscribe(page => {
        // tslint:disable-next-line:triple-equals
        if (page != i) {
          this.router.navigate([`/dashboard/comments/${i}`]);
        }
      });
    }

  }

  ngOnInit() {

  }

}
