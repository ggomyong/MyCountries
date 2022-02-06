
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products= [
    { id: 0, name: 'US Flag', price: '10.00', icon: 'flag-usa-solid', color: 'warn', quantity: 0 },
    { id: 1, name: 'US Flag', price: '10.00', icon: 'flag-usa-solid', color: 'warn', quantity: 0 },
    { id: 2, name: 'US Flag', price: '10.00', icon: 'flag-usa-solid', color: 'warn', quantity: 0 },
    { id: 3, name: 'US Flag', price: '10.00', icon: 'flag-usa-solid', color: 'warn', quantity: 0 },
    { id: 4, name: 'US Flag', price: '10.00', icon: 'flag-usa-solid', color: 'warn', quantity: 0 }
  ];

  private _countSubject = new Subject<number>();
  public count$=this._countSubject.asObservable();
  
  constructor() { }

  getProducts() {
    return this.products;
  }

  getTotalCount() {
    let totalCount=0;
    for (let product of this.products) {
      totalCount+=product.quantity;
    }
    this._countSubject.next(totalCount);
  }
}
