import { Injectable } from '@angular/core';
import { Product } from '../constants/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: Array<Product> = [];
  private productUrl: string = '/assets/shipping.json';

  constructor(private http: HttpClient) { }

  get items(): Array<Product> {
    return this._items;
  }

  addToCart(product: Product): void {
    this._items.push(product);
  }

  /**
   * Azzera lista di prodotti salvati nel carrello e restituisce array vuoto
   * @returns {Array<Product>} lista vuota di prodotti salvati nel carrello
   */
  clearCart(): Array<Product> {
    this._items = [];
    return this._items;
  }

  getShippingPrices(): Observable<Array<{type: string, price: number}>> {
    return this.http.get<Array<{type: string, price: number}>>(this.productUrl);
  }
}
