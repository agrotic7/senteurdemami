import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SeoService } from '../../services/seo.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product = signal<Product | undefined>(undefined);
  relatedProducts = signal<Product[]>([]);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const foundProduct = this.productService.getProductById(id);
      this.product.set(foundProduct);
      
      if (foundProduct) {
        // SEO Meta Tags
        this.seoService.updateMetaTags({
          title: `${foundProduct.name} - Parfum Traditionnel Africain | Senteur de Mami`,
          description: `${foundProduct.description}. ${foundProduct.characteristics?.volume} - ${foundProduct.characteristics?.duration} de tenue. Commandez en ligne avec livraison rapide.`,
          keywords: `${foundProduct.name}, acheter ${foundProduct.name.toLowerCase()}, parfum ${foundProduct.category}, ${foundProduct.characteristics?.fragrance?.toLowerCase()}, parfum africain naturel`,
          image: `/${foundProduct.image}`,
          type: 'product',
          canonicalUrl: `https://senteurdemami.com/products/${foundProduct.id}`
        });

        // Product Schema
        this.seoService.addProductSchema(foundProduct);

        // Breadcrumb Schema
        this.seoService.addBreadcrumbSchema([
          { name: 'Accueil', url: '/' },
          { name: 'Nos Produits', url: '/products' },
          { name: foundProduct.name, url: `/products/${foundProduct.id}` }
        ]);

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

  ngOnDestroy() {
    this.seoService.removeStructuredData();
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

