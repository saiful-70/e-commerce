import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductDialogComponent } from './components/add-product-dialog/add-product-dialog.component';
import { EditProductDialogComponent } from './components/edit-product-dialog/edit-product-dialog.component';
import { DeleteProductDialogComponent } from './components/delete-product-dialog/delete-product-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AdminPageComponent } from './admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminPageComponent,
    AddProductDialogComponent,
    EditProductDialogComponent,
    DeleteProductDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
