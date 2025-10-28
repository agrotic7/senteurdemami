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
    { label: 'Blog', link: '/blog' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Contact', link: '/contact' }
  ];

  legalLinks = [
    { label: 'Mentions Légales', link: '/legal-notice' },
    { label: 'Politique de Confidentialité', link: '/privacy-policy' },
    { label: 'Conditions Générales', link: '/terms-conditions' },
    { label: 'Politique de Retour', link: '/return-policy' }
  ];
}

