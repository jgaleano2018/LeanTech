import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppService {
  items = [];

  constructor() {}

  addToShopp(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearShopp() {
    this.items = [];
    return this.items;
  }
}
