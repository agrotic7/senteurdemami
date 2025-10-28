import { Injectable, signal } from '@angular/core';
import { BlogArticle, BlogCategory } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private articles = signal<BlogArticle[]>([
    {
      id: 1,
      title: 'Gowé : L\'Histoire et les Traditions d\'un Parfum Ancestral Africain',
      slug: 'gowe-histoire-traditions-parfum-ancestral-africain',
      excerpt: 'Découvrez l\'histoire fascinante du Gowé, ce parfum traditionnel africain utilisé depuis des générations pour parfumer les maisons et purifier l\'air.',
      content: `
        <h2>L'Origine du Gowé</h2>
        <p>Le Gowé est un parfum traditionnel africain qui remonte à plusieurs siècles. Originaire d'Afrique de l'Ouest, notamment du Sénégal, du Mali et de la Gambie, ce mélange aromatique unique a été transmis de génération en génération.</p>
        
        <h2>Composition et Ingrédients</h2>
        <p>Le Gowé authentique est composé d'un savant mélange d'ingrédients naturels :</p>
        <ul>
          <li><strong>Résines naturelles</strong> : Encens, myrrhe, benjoin</li>
          <li><strong>Huiles essentielles</strong> : Bois de santal, cèdre, patchouli</li>
          <li><strong>Épices</strong> : Clous de girofle, cannelle, cardamome</li>
          <li><strong>Plantes aromatiques</strong> : Vétiver, ylang-ylang</li>
        </ul>
        
        <h2>Utilisation Traditionnelle</h2>
        <p>Dans la tradition africaine, le Gowé est brûlé sur des charbons ardents dans un encensoir traditionnel. La fumée parfumée qui s'en dégage sert à :</p>
        <ul>
          <li>Parfumer la maison et créer une ambiance chaleureuse</li>
          <li>Purifier l'air et éloigner les mauvaises énergies</li>
          <li>Accueillir les invités lors d'occasions spéciales</li>
          <li>Accompagner les cérémonies et rituels traditionnels</li>
        </ul>
        
        <h2>Bienfaits du Gowé</h2>
        <p>Au-delà de son parfum envoûtant, le Gowé offre plusieurs bienfaits :</p>
        <ul>
          <li><strong>Relaxation</strong> : Les essences naturelles favorisent la détente</li>
          <li><strong>Purification</strong> : Assainit l'air ambiant</li>
          <li><strong>Spiritualité</strong> : Crée une atmosphère propice à la méditation</li>
          <li><strong>Connexion culturelle</strong> : Maintient le lien avec les traditions ancestrales</li>
        </ul>
        
        <h2>Comment Utiliser le Gowé Chez Vous</h2>
        <p>Pour profiter pleinement du Gowé :</p>
        <ol>
          <li>Utilisez un encensoir traditionnel ou un récipient résistant à la chaleur</li>
          <li>Allumez un charbon ardent et attendez qu'il rougisse</li>
          <li>Déposez une petite quantité de Gowé sur le charbon</li>
          <li>Laissez la fumée parfumée se diffuser naturellement</li>
          <li>Ventilez légèrement la pièce après utilisation</li>
        </ol>
        
        <h2>Senteur de Mami : L'Authenticité Garantie</h2>
        <p>Chez Senteur de Mami, nous préparons notre Gowé selon les recettes traditionnelles, avec des ingrédients 100% naturels soigneusement sélectionnés. Chaque lot est préparé artisanalement pour vous garantir la meilleure qualité.</p>
      `,
      image: '/assets/produits/Essence d\'Afrique.jpg',
      category: 'Traditions',
      author: 'Mami LAYE',
      publishedDate: '2025-10-15',
      readingTime: 5,
      tags: ['gowé', 'parfum traditionnel', 'culture africaine', 'encens naturel'],
      featured: true
    },
    {
      id: 2,
      title: 'Diguijé et Thiouraye : Guide Complet des Parfums pour Vêtements',
      slug: 'diguije-thiouraye-guide-parfums-vetements',
      excerpt: 'Apprenez à utiliser le Diguijé et le Thiouraye pour parfumer délicatement vos vêtements et votre linge selon la tradition africaine.',
      content: `
        <h2>Qu'est-ce que le Diguijé ?</h2>
        <p>Le Diguijé est un parfum liquide traditionnel spécialement conçu pour parfumer les vêtements et le linge. Contrairement aux parfums occidentaux, il ne contient pas d'alcool et est 100% naturel.</p>
        
        <h2>Le Thiouraye : L'Encens des Vêtements</h2>
        <p>Le Thiouraye est la version solide utilisée en fumigation. On le brûle pour imprégner les tissus d'une senteur délicate et durable.</p>
        
        <h2>Comment Utiliser le Diguijé</h2>
        <ul>
          <li><strong>Sur les vêtements</strong> : Vaporisez légèrement à 20-30 cm</li>
          <li><strong>Dans l'armoire</strong> : Quelques gouttes sur un tissu</li>
          <li><strong>Sur le linge de maison</strong> : Ajoutez au dernier rinçage</li>
        </ul>
        
        <h2>Utilisation du Thiouraye</h2>
        <ol>
          <li>Suspendez vos vêtements dans une pièce fermée</li>
          <li>Brûlez le Thiouraye en dessous</li>
          <li>Laissez la fumée imprégner les tissus pendant 15-20 minutes</li>
          <li>Aérez légèrement ensuite</li>
        </ol>
        
        <h2>Avantages par Rapport aux Parfums Synthétiques</h2>
        <ul>
          <li>100% naturel, sans produits chimiques</li>
          <li>Ne tache pas les vêtements</li>
          <li>Senteur durable et authentique</li>
          <li>Respectueux des tissus délicats</li>
          <li>Propriétés antibactériennes naturelles</li>
        </ul>
        
        <h2>Conseils de Conservation</h2>
        <p>Pour préserver la qualité de votre Diguijé et Thiouraye :</p>
        <ul>
          <li>Conservez dans un endroit frais et sec</li>
          <li>À l'abri de la lumière directe</li>
          <li>Fermez bien les contenants après utilisation</li>
          <li>Durée de conservation : 12-18 mois</li>
        </ul>
      `,
      image: '/assets/produits/Savane Mystique.jpg',
      category: 'Guide Pratique',
      author: 'Mami LAYE',
      publishedDate: '2025-10-20',
      readingTime: 4,
      tags: ['diguijé', 'thiouraye', 'parfum vêtements', 'guide pratique'],
      featured: true
    },
    {
      id: 3,
      title: '5 Raisons de Choisir des Parfums Naturels Plutôt que Synthétiques',
      slug: '5-raisons-choisir-parfums-naturels',
      excerpt: 'Découvrez pourquoi les parfums naturels comme nos senteurs traditionnelles sont meilleurs pour votre santé et l\'environnement.',
      content: `
        <h2>1. Meilleurs pour Votre Santé</h2>
        <p>Les parfums synthétiques contiennent souvent des phtalates, du parabène et d'autres produits chimiques potentiellement nocifs. Nos parfums naturels sont exempts de ces substances et ne provoquent pas d'allergies.</p>
        
        <h2>2. Respectueux de l'Environnement</h2>
        <p>La production de parfums synthétiques génère une pollution importante. Les ingrédients naturels sont biodégradables et leur extraction respecte l'environnement.</p>
        
        <h2>3. Senteurs Plus Authentiques</h2>
        <p>Les parfums naturels offrent des notes complexes et nuancées que les synthétiques ne peuvent reproduire. Chaque lot a ses particularités, rendant l'expérience unique.</p>
        
        <h2>4. Bienfaits Thérapeutiques</h2>
        <p>Les huiles essentielles naturelles ont des propriétés aromathérapeutiques reconnues : relaxation, concentration, bien-être émotionnel.</p>
        
        <h2>5. Tradition et Authenticité</h2>
        <p>En choisissant des parfums traditionnels, vous soutenez des savoir-faire ancestraux et participez à la préservation d'un patrimoine culturel précieux.</p>
      `,
      image: '/assets/produits/Fleur de Karité.jpg',
      category: 'Santé & Bien-être',
      author: 'Mami LAYE',
      publishedDate: '2025-10-22',
      readingTime: 3,
      tags: ['parfums naturels', 'santé', 'écologie', 'bien-être'],
      featured: false
    }
  ]);

  private categories = signal<BlogCategory[]>([
    { id: 'all', name: 'Tous les articles', count: 3 },
    { id: 'traditions', name: 'Traditions', count: 1 },
    { id: 'guide', name: 'Guides Pratiques', count: 1 },
    { id: 'sante', name: 'Santé & Bien-être', count: 1 }
  ]);

  getArticles() {
    return this.articles();
  }

  getArticleBySlug(slug: string): BlogArticle | undefined {
    return this.articles().find(a => a.slug === slug);
  }

  getFeaturedArticles() {
    return this.articles().filter(a => a.featured);
  }

  getCategories() {
    return this.categories();
  }

  filterArticles(category: string): BlogArticle[] {
    if (category === 'all') {
      return this.articles();
    }
    return this.articles().filter(a => a.category.toLowerCase().includes(category));
  }
}

