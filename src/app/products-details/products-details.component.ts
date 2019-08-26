import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { productsModel } from '../productsModel';
import { ShoppService } from '../shopp.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private shoppService: ShoppService,
  ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.product = productsModel[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.shoppService.addToShopp(product);
  }

}
