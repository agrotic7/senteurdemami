import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  featuredProducts: any[] = [];
  
  features = [
    {
      icon: 'leaf',
      title: '100% Naturel',
      description: 'Ingrédients naturels soigneusement sélectionnés pour leur pureté et qualité exceptionnelle'
    },
    {
      icon: 'sparkles',
      title: 'Artisanal',
      description: 'Chaque parfum est élaboré à la main avec passion et savoir-faire traditionnel'
    },
    {
      icon: 'heart',
      title: 'Luxe Accessible',
      description: 'Des fragrances de haute qualité à des prix abordables pour tous'
    },
    {
      icon: 'star',
      title: 'Unique',
      description: 'Créations exclusives inspirées des traditions et senteurs africaines'
    }
  ];

  constructor(private productService: ProductService) {
    this.featuredProducts = this.productService.getProducts().slice(0, 3);
  }

  orderOnWhatsApp(product: any) {
    window.open(this.productService.getWhatsAppLink(product), '_blank');
  }
}

