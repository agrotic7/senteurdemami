import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit, OnDestroy {
  
  faqs: FAQ[] = [
    {
      question: 'Qu\'est-ce que le Gowé, Diguijé et Thiouraye ?',
      answer: 'Ce sont des parfums traditionnels africains ancestraux. Le Gowé est un mélange d\'huiles et de résines pour parfumer la maison. Le Diguijé est utilisé pour parfumer les vêtements et le linge. Le Thiouraye est un encens naturel fait d\'épices, de bois et de résines aromatiques.',
      open: false
    },
    {
      question: 'Les produits sont-ils 100% naturels ?',
      answer: 'Oui ! Tous nos produits sont fabriqués selon des recettes traditionnelles avec des ingrédients 100% naturels : huiles essentielles, résines, épices, bois aromatiques et plantes. Aucun produit chimique ni synthétique.',
      open: false
    },
    {
      question: 'Comment utiliser les parfums traditionnels ?',
      answer: 'Le Gowé se brûle sur des charbons ardents pour parfumer la maison. Le Diguijé s\'applique directement sur les vêtements ou se diffuse dans l\'armoire. Le Thiouraye se brûle comme un encens traditionnel. Chaque produit est livré avec des instructions détaillées.',
      open: false
    },
    {
      question: 'Quels sont les délais de livraison ?',
      answer: 'En France métropolitaine : 2-4 jours ouvrés. En Europe : 5-7 jours ouvrés. DOM-TOM : 7-10 jours ouvrés. Livraison gratuite dès 50€ d\'achat en France.',
      open: false
    },
    {
      question: 'Puis-je retourner un produit ?',
      answer: 'Oui, vous disposez de 14 jours pour retourner un produit non ouvert dans son emballage d\'origine. Pour des raisons d\'hygiène, les produits ouverts ne peuvent pas être repris. Consultez notre politique de retour pour plus de détails.',
      open: false
    },
    {
      question: 'Comment passer commande ?',
      answer: 'Vous pouvez commander directement sur notre site ou via WhatsApp au +33 7 53 54 79 58. Nous acceptons les paiements par carte bancaire, PayPal, et virement.',
      open: false
    },
    {
      question: 'Combien de temps se conservent les produits ?',
      answer: 'Nos parfums traditionnels se conservent entre 12 et 24 mois dans un endroit frais et sec, à l\'abri de la lumière directe. Leur qualité reste optimale pendant toute cette période.',
      open: false
    },
    {
      question: 'Les parfums sont-ils sans danger ?',
      answer: 'Oui, nos produits sont naturels et sans danger lorsqu\'ils sont utilisés correctement. Évitez tout contact direct avec la peau lors de la combustion. Tenir hors de portée des enfants. Utiliser dans un espace ventilé.',
      open: false
    },
    {
      question: 'Livrez-vous à l\'international ?',
      answer: 'Oui, nous livrons dans toute l\'Europe, en Afrique et dans certains pays d\'Amérique. Les frais et délais varient selon la destination. Contactez-nous pour plus d\'informations sur votre pays.',
      open: false
    },
    {
      question: 'Proposez-vous des coffrets cadeaux ?',
      answer: 'Oui ! Nous proposons des coffrets découverte avec une sélection de nos meilleurs parfums traditionnels. Parfait pour offrir ou pour découvrir nos différentes senteurs. Contactez-nous pour plus d\'informations.',
      open: false
    },
    {
      question: 'Quelle est la différence entre vos produits et les parfums classiques ?',
      answer: 'Nos parfums sont traditionnels et 100% naturels, fabriqués selon des recettes ancestrales. Contrairement aux parfums synthétiques, ils sont utilisés pour parfumer l\'environnement et les textiles, et ont également une dimension spirituelle et culturelle importante dans la tradition africaine.',
      open: false
    },
    {
      question: 'Comment conserver mes produits ?',
      answer: 'Conservez vos produits dans leur emballage d\'origine, dans un endroit frais (15-25°C), sec et à l\'abri de la lumière directe du soleil. Fermez bien les contenants après utilisation pour préserver les arômes.',
      open: false
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'FAQ - Questions Fréquentes | Senteur de Mami',
      description: 'Toutes vos questions sur nos parfums traditionnels africains Gowé, Diguijé et Thiouraye. Livraison, utilisation, conservation et plus encore.',
      keywords: 'faq parfum africain, questions gowé, comment utiliser diguijé, thiouraye mode d\'emploi, livraison parfum traditionnel',
      canonicalUrl: 'https://senteurdemami.com/faq'
    });

    // FAQ Schema
    this.seoService.addFAQSchema(
      this.faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))
    );

    // Breadcrumb
    this.seoService.addBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'FAQ', url: '/faq' }
    ]);
  }

  ngOnDestroy() {
    this.seoService.removeStructuredData();
  }

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}

