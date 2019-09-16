import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';
import { ConstService } from 'src/app/core/const/const.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Input('product') product;
  categories;
  brands: object[];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    images: new FormArray([], Validators.required),
    warranty: new FormControl('', Validators.required),
    general: new FormGroup({
      in_the_box: new FormControl('', Validators.required),
      model_name: new FormControl('', Validators.required),
      model_number: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      sim_type: new FormControl('', Validators.required),
      touchScreen: new FormControl('', Validators.required),
      quick_charging: new FormControl('', Validators.required)
    }),
    display_feature: new FormGroup({
      size: new FormControl('', Validators.required),
      resolution: new FormControl('', Validators.required),
      resolution_type: new FormControl('', Validators.required),
      other_features: new FormControl('', Validators.required),
      brightness: new FormControl('', Validators.required),
      contrast_ratio: new FormControl('', Validators.required),
      analog_tv_reception: new FormControl('', Validators.required),
      view_angle: new FormControl('', Validators.required),
      panel_type: new FormControl('', Validators.required),
      digital_noise_filter: new FormControl('', Validators.required),
      aspect_ratio: new FormControl('', Validators.required),
    }),
    memory_storage: new FormGroup({
      internal_storage: new FormControl('', Validators.required),
      ram: new FormControl('', Validators.required),
      expandable: new FormControl('', Validators.required),
    }),
    camera: new FormGroup({
      primary_camera: new FormControl('', Validators.required),
      secondary_camera: new FormControl('', Validators.required),
      flash: new FormControl('', Validators.required),
      hd_recording: new FormControl('', Validators.required),
    }),
    connectivity_feature: new FormGroup({
      network_type: new FormControl('', Validators.required),
      supported_network: new FormControl('', Validators.required),
      bluetooth: new FormControl('', Validators.required),
      bluetooth_version: new FormControl('', Validators.required),
      wifi: new FormControl('', Validators.required),
      wifi_version: new FormControl('', Validators.required),
      usb_3_0_slots: new FormControl('', Validators.required),
      usb_2_0_slots: new FormControl('', Validators.required),
      headphone_jack: new FormControl('', Validators.required),
    }),
    smart_tv_feature: new FormGroup({
      supported_apps: new FormControl('', Validators.required),
      operating_system: new FormControl('', Validators.required),
      screen_mirroring: new FormControl('', Validators.required),
      content_providers: new FormControl('', Validators.required),
      supported_devices_for_casting: new FormControl('', Validators.required),
    }),
    highlight: new FormControl([], Validators.required)
  });
  get name() {
    return this.form.get('name');
  }
  get price() {
    return this.form.get('price');
  }
  get category_id() {
    return this.form.get('category_id');
  }
  get discount() {
    return this.form.get('discount');
  }
  get brand() {
    return this.form.get('brand');
  }
  get brandList() {
    if (this.brands) {
      // tslint:disable-next-line:triple-equals
      return this.brands.filter((item: any) => item.category_id == this.category_id.value);
    } else {
      return null;
    }
  }
  get images() {
    return this.form.get('images') as FormArray;
  }


  constructor(
    private http: HttpService,
    // tslint:disable-next-line:no-shadowed-variable
    private CONST: ConstService
  ) { }




  ngOnInit() {
    if (this.product) this.product.images.map(value => this.images.push(new FormControl(value)))
    this.http.getCategories()
      .subscribe((res: any) => this.categories = res.data);

    this.http.getBrands()
      .subscribe((res: any) => this.brands = res.data);
  }

  addImage(img: HTMLInputElement) {
    this.images.push(new FormControl(img.value));
    img.value = '';
  }
  removeImage(img: FormControl) {
    const index = this.images.controls.indexOf(img);
    this.images.removeAt(index);
  }
  onClick() {
    console.log(this.product);

  }
  onSubmit() {
    console.log('submit is working', this.form.value);
    if (this.product) {
      console.log('add product is running');

      this.http.updateProduct(this.product._id, this.form.value)
        .subscribe(
          res => console.log(res)
        );
    } else {
      console.log('update product is running');

      this.http.addProduct(this.form.value)
        .subscribe(
          res => console.log(res),
          err => console.log(err)

        );
    }

  }

}
