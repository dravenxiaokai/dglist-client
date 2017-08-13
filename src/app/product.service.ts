import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Product } from './product';

@Injectable()
export class ProductService {

  private url = 'api/products';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ) {}

  all(): Observable<Product[]> {
    return this.http
      .get(this.url)
      .map(response => response.json() as Product[]);
  }
}