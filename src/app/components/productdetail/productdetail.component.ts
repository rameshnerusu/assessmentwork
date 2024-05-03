import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssesementService } from 'src/app/services/assesement.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  addToCartClicked: boolean = false;

  public categoryName: string | null = '';
  public productid: string | null = '';
  public products: any = {};
  public cartlist: any = [];
  constructor(
    private router: ActivatedRoute,
    private http: AssesementService
  ) {}
  ngOnInit(): void {
    this.categoryName = this.router.snapshot.paramMap.get('category');
    this.productid = this.router.snapshot.paramMap.get('id');
    fetch(`https://fakestoreapi.com/products/${this.productid}`)
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  }
  addtocart(products: any) {
    this.cartlist = this.http.addtocart(products);
    this.addToCartClicked = true;
  }
}
