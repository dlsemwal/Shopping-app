import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as server from '../../configs/config';
import { Cart } from 'src/app/shared/interfaces/cart';
import { Product } from 'src/app/shared/interfaces/product';
import { LStorageService } from '../services/l-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private lStorage: LStorageService
  ) { }

  getCategories() {
    return this.http.get(server.categoriesUrl);
  }

  getProductsByCat(
    id: string,
    limit?: number
  ) {
    if (limit) {
      return this.http.get(`${server.productsUrlByCatId}${id}?limit=${limit}`);
    } else {
      return this.http.get(`${server.productsUrlByCatId}${id}`);
    }
  }

  getProductById(id: string) {
    return this.http.get(server.productByIdUrl(id));
  }
  getCart() {
    return this.http.get(server.cartUrl);
  }
  deleteCart(id: string) {
    return
  }
  updateQuantity(id: string, x: number) {
    const payload: Cart = {
      product_id: id,
      quantity: x
    }


    return this.http.put(`${server.cartUrl}/${this.lStorage.userCart}`, payload);
  }
  addToCart(id: string) {
    const payload: Cart = {
      product_id: id,
      quantity: 1
    }
    return this.http.post(server.cartUrl, payload);
  }
  getBrands() {
    return this.http.get(server.brandsUrl);
  }
  addProduct(data) {
    return this.http.post(server.productsUrl, data);
  }
  getProducts() {
    return this.http.get(server.allProductsUrl);
  }
  getBrandsByCat(id) {
    return this.http.get(server.brandsByCatUrl(id));
  }
  deleteProduct(id: string) {
    return this.http.delete(`${server.productsUrl}/${id}`);
  }
  getProduct(id: string) {
    return this.http.get(`${server.productsUrl}/${id}/details`);
  }
  updateProduct(id: string, data) {
    return this.http.put(`${server.productsUrl}/${id}/details`, data);
  }

  getAllProducts(
    id: string,
    page?: any,
    limit?: any,
    brand?: string
  ) {
    let params = new HttpParams()
    if (page) params = params.append('page', page);
    if (limit) params = params.append('limit', limit);
    if (brand) params = params.append('brand', brand);

    return this.http.get(`${server.productsUrlByCatId}${id}`, { params: params });
  }

  placeOrder() {
    return this.http.get(server.placeOrderUrl)
  }
  myOrders() {
    return this.http.get(server.myOrdersUrl)
  }
}
