import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoriesUrl, productsUrlByCatId, productByIdUrl, cartUrl } from '../../configs/config'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(categoriesUrl)
  }

  getProductsByCat(id,limit?) {
    if(limit) return this.http.get(`${productsUrlByCatId}${id}?limit=${limit}`);
    else return this.http.get(`${productsUrlByCatId}${id}`)
  }

  getProductById(id) {
    return this.http.get(productByIdUrl(id))
  }
  getCart(){
    return this.http.get(cartUrl)
  }
  
  
}
