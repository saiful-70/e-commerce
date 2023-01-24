import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss'],
})
export class AddProductDialogComponent {
  productForm: FormGroup;
  product: Product = {
    id: Date.now(),
    name: '',
    image: 'assets/galaxy-s21.jpg',
    price: 0,
    brandName: '',
    description: '',
  };

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['assets/galaxy-s21.jpg'],
      price: ['', Validators.required],
      brandName: ['', Validators.required],
      description: [''],
    });
  }

  onProductAdd() {
    this.productService.addProducts(this.product).subscribe((result) => {
      if (result) {
        this.dialogRef.close();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
