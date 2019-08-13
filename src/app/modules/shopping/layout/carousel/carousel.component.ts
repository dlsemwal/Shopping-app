import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    `https://thumbs.dreamstime.com/z/winter-sale-banner-template-snow-flakes-ice-shopping-end-vector-illustration-133543302.jpg`,
    `http://www.bengaluruairport.com/bial/faces/images/stores/DutyFree1.jpg`,
    `https://cdn11.bigcommerce.com/s-zw0v76l/product_images/theme_images/banner__74315.jpg`,
    `https://d11zer3aoz69xt.cloudfront.net/media/responsivebannerslider/responsivebannerslider/Champion.jpg`,
    `https://cdn.shopify.com/s/files/1/1055/8136/files/HP1.1_LipProductsSale-1920x600_37e1dbb0-67db-4146-9496-5bff9273eade_1920x.jpg`,
    `https://thumbs.dreamstime.com/z/winter-sale-banner-template-snow-flakes-ice-shopping-end-vector-illustration-133543244.jpg`
  ];
  constructor() {}
  ngOnInit() {
  }

}
