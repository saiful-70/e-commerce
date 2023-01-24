import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
