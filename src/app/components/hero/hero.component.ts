import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {
  currentSlide = signal(0);
  slides = [
    {
      title: 'Bienvenue chez Senteur de Mami',
      subtitle: 'Parfums Authentiques & Naturels',
      description: 'Découvrez nos fragrances uniques inspirées de l\'Afrique',
      image: 'assets/hero/slide1.jpg'
    },
    {
      title: 'Collection Exclusive',
      subtitle: 'Des Parfums qui Racontent une Histoire',
      description: 'Chaque parfum est une œuvre d\'art élaborée avec passion',
      image: 'assets/hero/slide2.jpg'
    },
    {
      title: '100% Naturel',
      subtitle: 'Qualité & Authenticité',
      description: 'Ingrédients soigneusement sélectionnés pour votre bien-être',
      image: 'assets/hero/slide3.jpg'
    }
  ];

  constructor(private productService: ProductService) {
    // Auto-slide every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentSlide.set(
      this.currentSlide() === 0 ? this.slides.length - 1 : this.currentSlide() - 1
    );
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }

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

