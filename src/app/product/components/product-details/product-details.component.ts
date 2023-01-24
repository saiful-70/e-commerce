import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productId: number = 1;
  quantity: number = 1;

  product: Product = {
    id: 1,
    name: '',
    price: 1,
    brandName: '',
    image: '',
    description: '',
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.productId = id ? parseInt(id) : 1;
    });

    this.productService.getProducts().subscribe((data) => {
      const employeeData = data.filter(
        (singleData) => singleData.id === this.productId
      );
      this.product = employeeData[0];
      // console.log(employeeData[0]);
    });
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
