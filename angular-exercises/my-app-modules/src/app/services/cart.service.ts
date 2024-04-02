import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: Array<Product> = [];

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
    return this.http.get<Array<{type: string, price: number}>>('/assets/shipping.json');
  }

  

  // Singleton
  // costruttore private
  // metodo statico pubblico > metodo invocato da fuori senza l'oggetto
  // new Singleton > invoco metodo statico
  // se singleton non esite > istanzio e restituisco istanza
  // se singleton esiste > restituisco oggetto già istanziato

  // Principio DRY (don't repeat yourself)
  //  1. Ordine / tempo
  //  2. Evitare errori

  // Mantenibilità del codice
  // Facile comprensione > Facile modifica
  // Façade = Facciata > Funzioni PURE del ts nel suo servizio (Componenti)

  // Promise = Promessa
  // let promessa = new Promise(((resolve, reject) => {
  //   ...
  // }));

  // promessa.then(() => {...})
  // .catch()

  // Observable: flusso di dati > emette il valore
  // Observer: osserva ed inserire Observer.next()
  // Subject: Observable + Observer

}
