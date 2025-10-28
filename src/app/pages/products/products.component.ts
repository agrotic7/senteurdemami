import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit, OnDestroy {
  products = signal<Product[]>([]);
  categories = signal<any[]>([]);
  selectedCategory = signal('all');
  searchTerm = signal('');

  constructor(
    private productService: ProductService,
    private seoService: SeoService
  ) {
    this.products.set(this.productService.getProducts());
    this.categories.set(this.productService.getCategories());
  }

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Nos Parfums Traditionnels Africains - Senteur de Mami | Boutique en Ligne',
      description: 'Parcourez notre collection complète de parfums traditionnels africains. Gowé, Diguijé, Thiouraye, Oud Royal et plus encore. 100% naturels, livraison rapide en France.',
      keywords: 'acheter parfum africain, boutique parfum traditionnel, gowé prix, diguijé acheter, thiouraye en ligne, parfum africain authentique, encens naturel',
      image: '/assets/produits/Essence d\'Afrique.jpg',
      canonicalUrl: 'https://senteurdemami.com/products'
    });

    this.seoService.addBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Nos Produits', url: '/products' }
    ]);
  }

  ngOnDestroy() {
    this.seoService.removeStructuredData();
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

