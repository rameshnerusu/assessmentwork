import { Component, OnDestroy, OnInit } from '@angular/core';
import { AssesementService } from 'src/app/services/assesement.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  constructor(private http: AssesementService) {}
  ngOnInit(): void {
    this.http.getproducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }
  public removeItem(item: any) {
    this.http.removecartItem(item);
  }
}
