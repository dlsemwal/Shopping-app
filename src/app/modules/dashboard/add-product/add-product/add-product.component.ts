import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../shared/services/common.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  model: any = {};
  constructor(private common: CommonService) { }

  ngOnInit() {
  }
  submitForm(form) {
    console.log(form);

  }
  img(x) {
    const reader = new FileReader()
    const fd = new FormData();
    fd.append('image', x.target.files[0], x.target.files[0].name)
    console.log(fd.get('image'))

  }
  

}
