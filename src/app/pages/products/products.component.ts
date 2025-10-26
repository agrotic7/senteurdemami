import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent {
  products = signal<Product[]>([]);
  categories = signal<any[]>([]);
  selectedCategory = signal('all');
  searchTerm = signal('');

  constructor(private productService: ProductService) {
    this.products.set(this.productService.getProducts());
    this.categories.set(this.productService.getCategories());
  }

  filteredProducts = computed(() => {
    return this.productService.filterProducts(
      this.selectedCategory(),
      this.searchTerm()
    );
  });

  selectCategory(categoryId: string) {
    this.selectedCategory.set(categoryId);
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  orderOnWhatsApp(product: Product) {
    window.open(this.productService.getWhatsAppLink(product), '_blank');
  }

  getDisplayPrice(product: Product): number {
    return product.promotionPrice || product.price;
  }

  hasPromotion(product: Product): boolean {
    return !!product.promotionPrice;
  }
}

