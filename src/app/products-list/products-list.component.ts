import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsModel } from '../productsModel';
import { productsList } from '../productsList';
import { ShoppService } from '../shopp.service';
import { ProductModel } from '../productModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList = productsList;
  producstModel = productsModel;
  product;
  mensaje = 'Este es el hijo';
  objDate = Date.now();
  count: number;
  test: any = {};
  confirmProdList: '✔';
  constructor(
    private route: ActivatedRoute,
    private shoppService: ShoppService
    ) {
      this.test.value = 1;
      this.count = 1;
    }

    dynamicArray: Array<ProductModel> = [];
    newDynamic: any = {};
  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.product = productsModel[+params.get('productId')];

      let ubication: string;
      ubication = this.product.ubication;
      let productModel: ProductModel;
      this.mensaje = 'Ingrese a ejecutar ok';
      if (this.product.ubication != null) {
        this.newDynamic = { ubication: this.product.ubication, product: this.product.product,
                            price: this.product.price, quantity: this.product.quantity };
        this.productsList.push(this.newDynamic);
      }
    });
  }

  addRow(productModel: ProductModel) {
     this.productsList.push(productModel);
     return true;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  counter(flag) {

    // tslint:disable-next-line: triple-equals
    if (flag == 'increment') {
      this.count++;
    }
    // tslint:disable-next-line: triple-equals
    if (flag == 'decrement') {
      this.count--;
    }
    this.test.value = this.count;
  }
}
