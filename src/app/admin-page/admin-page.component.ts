import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { DeleteProductDialogComponent } from '../delete-product-dialog/delete-product-dialog.component';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['image', 'name', 'edit', 'delete'];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
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

  openAddProductDialog() {
    const dialogRef = this.dialog.open(AddProductDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.productService.getProducts().subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.log(error);
        }
      );
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openEditProductDialog(product: Product) {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.productService.getProducts().subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.log(error);
        }
      );
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openDeleteProductDialog(product: Product) {
    const dialogRef = this.dialog.open(DeleteProductDialogComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.productService.getProducts().subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.log(error);
        }
      );
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
