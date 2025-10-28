import { Injectable, signal } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    {
      id: 1,
      name: 'Essence d\'Afrique',
      description: 'Un parfum envoûtant aux notes de vanille et d\'épices africaines',
      price: 25000,
      image: 'assets/produits/Essence d\'Afrique.jpg',
      category: 'femme',
      isNew: true,
      inStock: true,
      gallery: ['assets/produits/Essence d\'Afrique.jpg'],
      characteristics: {
        volume: '50ml',
        fragrance: 'Orientale',
        duration: '8-12 heures',
        ingredients: ['Vanille', 'Bois de santal', 'Musc']
      }
    },
    {
      id: 2,
      name: 'Savane Mystique',
      description: 'Notes boisées et musquées inspirées de la savane',
      price: 28000,
      image: 'assets/produits/Savane Mystique.jpg',
      category: 'homme',
      isPromotion: true,
      promotionPrice: 22000,
      inStock: true,
      characteristics: {
        volume: '50ml',
        fragrance: 'Boisée',
        duration: '10-14 heures',
        ingredients: ['Cèdre', 'Musc', 'Ambre']
      }
    },
    {
      id: 3,
      name: 'Fleur de Karité',
      description: 'Douceur florale avec des notes de karité et jasmin',
      price: 23000,
      image: 'assets/produits/Fleur de Karité.jpg',
      category: 'femme',
      inStock: true,
      characteristics: {
        volume: '50ml',
        fragrance: 'Florale',
        duration: '6-8 heures',
        ingredients: ['Jasmin', 'Karité', 'Rose']
      }
    },
    {
      id: 4,
      name: 'Oud Royal',
      description: 'Parfum luxueux aux notes d\'oud et de rose',
      price: 35000,
      image: 'assets/produits/Oud Royal.jpg',
      category: 'mixte',
      isNew: true,
      inStock: true,
      characteristics: {
        volume: '100ml',
        fragrance: 'Orientale',
        duration: '12-16 heures',
        ingredients: ['Oud', 'Rose', 'Safran']
      }
    },
    {
      id: 5,
      name: 'Baobab Frais',
      description: 'Fraîcheur citronnée avec des notes de baobab',
      price: 20000,
      image: 'assets/produits/Baobab Frais.jpg',
      category: 'mixte',
      inStock: true,
      characteristics: {
        volume: '30ml',
        fragrance: 'Fraîche',
        duration: '4-6 heures',
        ingredients: ['Citron', 'Baobab', 'Menthe']
      }
    },
    {
      id: 6,
      name: 'Ambre Solaire',
      description: 'Chaleur ambrée avec des notes épicées',
      price: 27000,
      image: 'assets/produits/Ambre Solaire.jpg',
      category: 'femme',
      isPromotion: true,
      promotionPrice: 21000,
      inStock: true,
      characteristics: {
        volume: '50ml',
        fragrance: 'Ambrée',
        duration: '8-10 heures',
        ingredients: ['Ambre', 'Cannelle', 'Patchouli']
      }
    }
  ]);

  private categories = signal<ProductCategory[]>([
    { id: 'all', name: 'Tous' },
    { id: 'femme', name: 'Femme' },
    { id: 'homme', name: 'Homme' },
    { id: 'mixte', name: 'Mixte' }
  ]);

  getProducts() {
    return this.products();
  }

  getCategories() {
    return this.categories();
  }

  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  filterProducts(category: string, searchTerm: string = ''): Product[] {
    let filtered = this.products();

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  getWhatsAppLink(product: Product): string {
    const phoneNumber = '33753547958'; // Numéro WhatsApp France
    const message = `Bonjour, je suis intéressé(e) par le parfum *${product.name}* au prix de ${product.promotionPrice || product.price} FCFA. Pouvez-vous me donner plus d'informations ?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  getGeneralWhatsAppLink(): string {
    const phoneNumber = '33753547958';
    const message = 'Bonjour, je souhaiterais avoir des informations sur vos parfums Senteur de Mami.';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}

