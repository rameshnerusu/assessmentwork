import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public categoryName: string | null = '';
  public products: any[] = [];
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.categoryName = this.router.snapshot.paramMap.get('category');
    fetch(`https://fakestoreapi.com/products/category/${this.categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
        console.log(this.products);
      });
  }
}
