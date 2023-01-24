import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.scss'],
})
export class DeleteProductDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
    this.productService.deleteProduct(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
