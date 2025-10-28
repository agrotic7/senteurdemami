import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: [`
    /* 3D Perspective Container */
    .perspective-3d {
      perspective: 1500px;
      perspective-origin: center;
    }

    /* 3D Banner Container */
    .banner-3d-container {
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .banner-3d-container:hover {
      transform: rotateY(-5deg) rotateX(3deg) translateZ(20px);
    }

    /* 3D Card */
    .banner-3d-card {
      transform-style: preserve-3d;
      backface-visibility: hidden;
      will-change: transform;
    }

    .banner-3d-container:hover .banner-3d-card {
      box-shadow: 
        20px 20px 60px rgba(113, 47, 38, 0.25),
        -10px -10px 40px rgba(218, 165, 32, 0.15),
        0 0 80px rgba(113, 47, 38, 0.1);
    }

    /* Pulse lent pour le glow */
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }

    .animate-pulse-slow {
      animation: pulse-slow 5s ease-in-out infinite;
    }

    /* Smooth GPU acceleration */
    .transform-gpu {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
    }

    /* Image drop shadow enhancement */
    img {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
    }

    /* Mobile optimization - Keep same style as desktop */
    @media (max-width: 1024px) {
      .perspective-3d {
        perspective: 1200px;
      }
      
      .banner-3d-container:hover {
        transform: rotateY(-3deg) rotateX(2deg) translateZ(15px);
      }

      .banner-3d-card {
        max-width: 100%;
      }

      /* Keep object-contain for mobile */
      img {
        object-fit: contain !important;
      }
    }
  `]
})
export class HeroComponent {
  constructor(private productService: ProductService) {}

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

