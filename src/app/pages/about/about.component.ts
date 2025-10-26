import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {
  features = [
    {
      icon: '🌿',
      title: '100% Naturel',
      description: 'Ingrédients naturels soigneusement sélectionnés pour leur qualité exceptionnelle'
    },
    {
      icon: '✨',
      title: 'Fait Main',
      description: 'Chaque parfum est élaboré artisanalement avec passion et savoir-faire'
    },
    {
      icon: '🌍',
      title: 'Éco-responsable',
      description: 'Production respectueuse de l\'environnement et emballages recyclables'
    },
    {
      icon: '🎁',
      title: 'Unique',
      description: 'Des fragrances exclusives inspirées des traditions africaines'
    }
  ];

  stats = [
    { number: '100%', label: 'Naturel' },
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '15+', label: 'Parfums Uniques' },
    { number: '5+', label: 'Années d\'Expérience' }
  ];

  team = [
    {
      name: 'Fatou Sall',
      role: 'Fondatrice & Parfumeuse',
      image: '👩🏿',
      bio: 'Passionnée par les parfums depuis son enfance'
    },
    {
      name: 'Amadou Diop',
      role: 'Maître Parfumeur',
      image: '👨🏿',
      bio: 'Expert en fragrances africaines traditionnelles'
    },
    {
      name: 'Aïssatou Ndiaye',
      role: 'Designer Produits',
      image: '👩🏾',
      bio: 'Créatrice des emballages élégants'
    }
  ];
}

