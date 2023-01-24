import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interface/product';
import { ProductPageComponent } from './product-page/product-page.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _url = 'http://localhost:3000/products';
  products: Product[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }

  addProducts(item: Product): Observable<Product> {
    return this.http.post<Product>(this._url, item);
  }

  updateProducts(item: Product): Observable<Product> {
    return this.http.patch<Product>(`${this._url}/${item.id}`, item);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this._url}/${id}`);
  }
}
