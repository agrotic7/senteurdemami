import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styles: []
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Aïssatou Diallo',
      rating: 5,
      comment: 'Les parfums Senteur de Mami sont extraordinaires ! La qualité est exceptionnelle et les fragrances durent toute la journée. Je recommande vivement !',
      date: 'Il y a 2 semaines',
      avatar: '👩🏾'
    },
    {
      id: 2,
      name: 'Mamadou Sow',
      rating: 5,
      comment: 'Excellent service et produits de très haute qualité. Les parfums sont authentiques et naturels. J\'adore la collection !',
      date: 'Il y a 1 mois',
      avatar: '👨🏿'
    },
    {
      id: 3,
      name: 'Fatou Ndiaye',
      rating: 5,
      comment: 'J\'ai découvert Senteur de Mami il y a quelques mois et je suis devenue une cliente fidèle. Les parfums sont uniques et de qualité premium !',
      date: 'Il y a 3 semaines',
      avatar: '👩🏿'
    },
    {
      id: 4,
      name: 'Ousmane Ba',
      rating: 4,
      comment: 'Très bon rapport qualité-prix. Les parfums sont naturels et sentent vraiment bon. Livraison rapide via WhatsApp.',
      date: 'Il y a 1 semaine',
      avatar: '👨🏾'
    },
    {
      id: 5,
      name: 'Marième Fall',
      rating: 5,
      comment: 'Je suis ravie de ma commande ! Le parfum Essence d\'Afrique est magnifique. Merci Senteur de Mami pour ces créations uniques.',
      date: 'Il y a 4 jours',
      avatar: '👩🏾'
    },
    {
      id: 6,
      name: 'Abdoulaye Cissé',
      rating: 5,
      comment: 'Produits authentiques et service client au top. La commande via WhatsApp est très pratique. Je recommande à 100% !',
      date: 'Il y a 2 jours',
      avatar: '👨🏿'
    }
  ]);

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}

