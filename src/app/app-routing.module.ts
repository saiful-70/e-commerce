import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin/admin-page.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: SignInComponent },
  {
    path: 'admin-dashboard',
    component: AdminPageComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((x) => x.AdminModule),
  },
  {
    path: 'products',
    component: ProductPageComponent,
    loadChildren: () =>
      import('./product/product.module').then((x) => x.ProductModule),
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    loadChildren: () =>
      import('./product/product.module').then((x) => x.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [SignInComponent];
