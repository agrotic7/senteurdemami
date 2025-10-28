import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductService } from '../../services/product.service';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HeroComponent, AnimateOnScrollDirective],
  templateUrl: './home.component.html',
  styles: [`
    /* Video 3D Perspective */
    .perspective-video {
      perspective: 1200px;
      perspective-origin: center;
    }

    .video-3d-container {
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .perspective-video:hover .video-3d-container {
      transform: rotateY(-2deg) rotateX(1deg) translateZ(10px);
    }

    /* Video controls styling */
    video {
      outline: none;
    }

    video::-webkit-media-controls-panel {
      background-image: linear-gradient(transparent, rgba(113, 47, 38, 0.1));
    }
  `]
})
export class HomeComponent {
  featuredProducts: any[] = [];
  
  features = [
    {
      icon: 'leaf',
      title: '100% Traditionnel',
      description: 'Recettes ancestrales transmises de mère en fille, respectant les méthodes traditionnelles'
    },
    {
      icon: 'sparkles',
      title: 'Senteurs Authentiques',
      description: 'Gowé, Diguijé et Thiouraye préparés avec les meilleurs ingrédients naturels'
    },
    {
      icon: 'heart',
      title: 'Usage Multiple',
      description: 'Pour parfumer votre maison, vos vêtements, ou accompagner vos moments spirituels et rituels'
    },
    {
      icon: 'star',
      title: 'Savoir-Faire Ancestral',
      description: 'Chaque préparation respecte les dosages traditionnels d\'huiles, résines et épices'
    }
  ];

  constructor(private productService: ProductService) {
    this.featuredProducts = this.productService.getProducts().slice(0, 3);
  }

  orderOnWhatsApp(product: any) {
    window.open(this.productService.getWhatsAppLink(product), '_blank');
  }
}

