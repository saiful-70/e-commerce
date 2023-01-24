import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private _url = 'http://localhost:3000/products';
  private _url = 'https://mocki.io/v1/0dae5081-13a6-4e3e-b5a1-f01586636596'; //for only get
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
