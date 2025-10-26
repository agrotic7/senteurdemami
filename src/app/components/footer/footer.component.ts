import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Accueil', link: '/' },
    { label: 'À Propos', link: '/about' },
    { label: 'Produits', link: '/products' },
    { label: 'Témoignages', link: '/testimonials' },
    { label: 'Contact', link: '/contact' }
  ];

  legalLinks = [
    { label: 'Mentions Légales', link: '#mentions-legales' },
    { label: 'Politique de Confidentialité', link: '#confidentialite' },
    { label: 'Conditions Générales', link: '#cgv' },
    { label: 'Politique de Retour', link: '#retour' }
  ];
}

