import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../interface/product';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
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
      },
      (error) => {
        console.log(error);
      }
    );
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goToProductDetails(product: Product) {
    this.router.navigate([product.id], { relativeTo: this.route });
  }
}
