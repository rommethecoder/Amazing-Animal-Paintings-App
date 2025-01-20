import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl + '/cart');
  }

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl + "/cart", product);
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/cart');
  }

  checkout(products: Product[]): Observable<void> {
    return this.httpClient.post<void>(this.apiUrl + '/checkout', products);
  }
}
