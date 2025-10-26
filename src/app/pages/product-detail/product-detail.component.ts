import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  product = signal<Product | undefined>(undefined);
  relatedProducts = signal<Product[]>([]);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const foundProduct = this.productService.getProductById(id);
      this.product.set(foundProduct);
      
      if (foundProduct) {
        // Get related products from same category
        const allProducts = this.productService.getProducts();
        this.relatedProducts.set(
          allProducts
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 3)
        );
      }
    });
  }

  orderOnWhatsApp() {
    const prod = this.product();
    if (prod) {
      window.open(this.productService.getWhatsAppLink(prod), '_blank');
    }
  }

  getDisplayPrice(): number {
    const prod = this.product();
    return prod ? (prod.promotionPrice || prod.price) : 0;
  }

  hasPromotion(): boolean {
    return !!this.product()?.promotionPrice;
  }
}

