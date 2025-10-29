import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: [`
    /* Flat banner: keep images sharp without 3D */
    img {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
    }
  `]
})
export class HeroComponent {
  constructor(
    private productService: ProductService
  ) {}

  scrollToProducts() {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openWhatsApp() {
    window.open(this.productService.getGeneralWhatsAppLink(), '_blank');
  }
}

