import { Product } from 'src/app/models/product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe( products => {
      this.products = products
    });
  }

}
