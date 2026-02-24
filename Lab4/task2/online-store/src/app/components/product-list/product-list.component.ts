import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [...products];

  onSort(event: any) {
    const value = event.target.value;
    if (value === 'asc') {
      this.products.sort((a: any, b: any) => a.price - b.price);
    } else if (value === 'desc') {
      this.products.sort((a: any, b: any) => b.price - a.price);
    }
  }
}