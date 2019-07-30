import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoriesUrl, productsUrlByCatId, productByIdUrl, cartUrl, brandsUrl, productsUrl } from '../../configs/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(categoriesUrl);
  }

  getProductsByCat(id, limit?) {
    if (limit) {
      return this.http.get(`${productsUrlByCatId}${id}?limit=${limit}`);
    } else {
      return this.http.get(`${productsUrlByCatId}${id}`);
    }
  }

  getProductById(id) {
    return this.http.get(productByIdUrl(id));
  }
  getCart() {
    return this.http.get(cartUrl);
  }
  updateQuantity(id: string, x: number) {
    return this.http.put(`${cartUrl}/${id}`, { quantity: x });
  }
  addToCart(id) {
    return this.http.post(cartUrl, { product_id: id, quantity: 1 });
  }
  getBrands() {
    return this.http.get(brandsUrl);
  }
  addProduct(data) {
    return this.http.post(productsUrl, data);
  }

}
