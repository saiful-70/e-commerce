import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss'],
})
export class EditProductDialogComponent {
  productForm: FormGroup;
  product: Product = {
    id: this.data.id,
    name: this.data.name,
    image: this.data.image,
    price: this.data.price,
    brandName: this.data.brandName,
    description: this.data.description,
  };

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: [''],
      price: ['', Validators.required],
      brandName: ['', Validators.required],
      description: [''],
    });
  }

  onProductEdit() {
    this.productService.updateProducts(this.product).subscribe((result) => {
      if (result) {
        this.dialogRef.close();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
