import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styles: [`
    .perspective-3d {
      perspective: 2000px;
      perspective-origin: center center;
    }

    .banner-3d-container {
      transform-style: preserve-3d;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
      animation: float-smooth 6s ease-in-out infinite;
      overflow: hidden;
    }

    .banner-3d-container:hover {
      transform: rotateY(-8deg) rotateX(5deg) translateZ(40px) scale(1.02);
    }

    .banner-3d-card {
      transform-style: preserve-3d;
      backface-visibility: hidden;
      will-change: transform;
      position: relative;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .banner-3d-container:hover .banner-3d-card {
      box-shadow: 
        30px 30px 80px rgba(113, 47, 38, 0.35),
        -15px -15px 50px rgba(218, 165, 32, 0.25),
        0 0 100px rgba(113, 47, 38, 0.15),
        inset 0 0 40px rgba(255, 255, 255, 0.05);
    }

    .banner-3d-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(218, 165, 32, 0.08) 50%,
        transparent 70%
      );
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      pointer-events: none;
      z-index: 10;
    }

    .banner-3d-container:hover .banner-3d-card::before {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }

    .banner-depth-layer {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .banner-depth-layer-1 {
      transform: translateZ(-15px);
      background: white;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }

    .banner-3d-container:hover .banner-depth-layer-1 {
      transform: translateZ(-20px) scale(1.02);
    }

    @keyframes pulse-glow {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.95);
        filter: blur(40px);
      }
      50% {
        opacity: 0.6;
        transform: scale(1.05);
        filter: blur(50px);
      }
    }

    .animate-pulse-slow {
      animation: pulse-glow 4s ease-in-out infinite;
    }

    @keyframes float-smooth {
      0%, 100% {
        transform: translateY(0px) translateZ(0);
      }
      50% {
        transform: translateY(-10px) translateZ(10px);
      }
    }

    .transform-gpu {
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
    }

    img {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .banner-3d-container:hover img {
      transform: scale(1.08) translateZ(20px);
    }

    .banner-3d-card::after {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(
        135deg,
        rgba(218, 165, 32, 0.15),
        rgba(113, 47, 38, 0.15)
      );
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: -1;
      filter: blur(15px);
    }

    .banner-3d-container:hover .banner-3d-card::after {
      opacity: 0.5;
    }

    @keyframes particle-float {
      0%, 100% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0.3;
      }
      50% {
        transform: translate(20px, -20px) rotate(180deg);
        opacity: 0.6;
      }
    }

    @media (max-width: 1024px) {
      .perspective-3d {
        perspective: 1500px;
      }
      
      .banner-3d-container:hover {
        transform: rotateY(-5deg) rotateX(3deg) translateZ(25px) scale(1.01);
      }

      .banner-3d-card {
        max-width: 100%;
      }

      img {
        object-fit: contain !important;
      }

      .banner-3d-container {
        animation: float-smooth 8s ease-in-out infinite;
      }
    }
  `]
})
export class HeroComponent {
  constructor(
    private productService: ProductService,
    private el: ElementRef
  ) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (window.innerWidth > 1024) {
      const banner = this.el.nativeElement.querySelector('.banner-3d-container');
      if (banner) {
        const rect = banner.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 10;
        
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        
        if (distance < maxDistance * 1.5) {
          banner.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(50px) scale(1.03)';
        }
      }
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    const banner = this.el.nativeElement.querySelector('.banner-3d-container');
    if (banner && window.innerWidth > 1024) {
      banner.style.transform = '';
    }
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
