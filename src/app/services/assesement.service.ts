import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssesementService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  getallcategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
  getproducts() {
    return this.productList.asObservable();
  }
  addtocart(products: any) {
    this.cartItemList.push(products);
    this.productList.next(this.cartItemList);
  }
  removecartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
  }
}
