import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../interface/product';

import { Router, ActivatedRoute } from '@angular/router';

export interface Cart extends Product {
  qty: number;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  cart: Cart[] = [];
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        // this.cart = [...products];
        for (let i = 0; i < products.length; i++) {
          this.cart.push({ ...products[i], qty: 1 });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  incrementQuantity(product: Cart) {
    product.qty++;
  }

  decrementQuantity(product: Cart) {
    // if (this.cart.qty > 1) {
    product.qty--;
    // }
  }

  goToProductDetails(product: Product) {
    this.router.navigate([product.id], { relativeTo: this.route });
  }
}
