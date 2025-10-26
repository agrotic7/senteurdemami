import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
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
}

