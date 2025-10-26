# 🌸 Senteur de Mami - Site Vitrine E-Commerce

Site vitrine professionnel avec catalogue de produits et intégration WhatsApp pour la marque de parfums **Senteur de Mami**.

## 📋 Description du Projet

Site web moderne et responsive présentant une collection de parfums authentiques et naturels inspirés des traditions africaines. Le site permet aux clients de découvrir les produits et de commander directement via WhatsApp.

## ✨ Fonctionnalités

### Pages Principales

- ✅ **Page d'Accueil** - Bannière dynamique avec slider automatique
- ✅ **Section À Propos** - Histoire, valeurs et statistiques de la marque
- ✅ **Catalogue Produits** - Affichage des produits avec filtres et recherche
- ✅ **Témoignages Clients** - Avis et évaluations des clients satisfaits
- ✅ **Page Contact** - Formulaire de contact et informations de contact
- ✅ **Footer** - Liens rapides, informations légales et réseaux sociaux

### Fonctionnalités du Catalogue

- 🔍 Recherche de produits par nom ou description
- 🏷️ Filtres par catégorie (Femme, Homme, Mixte)
- 📱 Commande directe via WhatsApp sur chaque produit
- 🎁 Badges "Nouveau" et "Promotion"
- 💰 Affichage des prix avec promotions
- 📊 Gestion des stocks (disponibilité)
- 🖼️ Modal détaillé pour chaque produit

### Intégration WhatsApp

- 📱 Bouton WhatsApp flottant sur toutes les pages
- 💬 Messages pré-remplis avec détails du produit
- ⚡ Redirection automatique vers WhatsApp Business

### Design & UX

- 📱 **100% Responsive** - Mobile-First Design avec Tailwind CSS
- 🎨 **Design Moderne** - Gradients, animations et transitions fluides
- ⚡ **Performance Optimisée** - Chargement rapide et animations légères
- ♿ **Accessible** - Navigation intuitive et ARIA labels
- 🎭 **Animations** - Effets visuels élégants (fade-in, hover, etc.)

## 🛠️ Technologies Utilisées

- **Framework**: Angular 20.3 (Standalone Components)
- **Styling**: Tailwind CSS
- **Language**: TypeScript 5.9
- **Build**: Angular CLI
- **Icons**: Emojis natifs + SVG

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## 🚀 Commandes Disponibles

### Développement

```bash
npm start
# ou
ng serve
```

Le site sera accessible sur `http://localhost:4200`

### Build de Production

```bash
npm run build
# ou
ng build
```

Les fichiers optimisés seront dans le dossier `dist/`

### Tests

```bash
npm test
# ou
ng test
```

### Linting

```bash
ng lint
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # En-tête avec navigation
│   │   ├── hero/                # Bannière d'accueil avec slider
│   │   ├── about/               # Section À Propos
│   │   ├── products/            # Catalogue produits
│   │   ├── testimonials/        # Témoignages clients
│   │   ├── contact/             # Formulaire de contact
│   │   ├── footer/              # Pied de page
│   │   └── whatsapp-button/     # Bouton WhatsApp flottant
│   ├── models/
│   │   └── product.model.ts     # Interfaces TypeScript
│   ├── services/
│   │   └── product.service.ts   # Service de gestion des produits
│   ├── app.ts                   # Composant racine
│   ├── app.html                 # Template principal
│   ├── app.css                  # Styles globaux
│   └── app.routes.ts            # Configuration des routes
├── styles.css                   # Styles Tailwind globaux
└── index.html                   # Point d'entrée HTML
```

## 🎨 Personnalisation

### Couleurs (tailwind.config.js)

```javascript
colors: {
  primary: {
    500: '#d946ef',  // Violet principal
    600: '#c026d3',
  },
  secondary: {
    500: '#ec4899',  // Rose secondaire
    600: '#db2777',
  }
}
```

### Produits

Les produits sont définis dans `src/app/services/product.service.ts`.
Modifiez le tableau `products` pour ajouter/modifier des produits.

### Contact WhatsApp

Numéros configurés dans `product.service.ts`:

- Téléphone: +221 77 445 19 82
- WhatsApp: +221 76 823 08 03

## 📱 Fonctionnalités WhatsApp

Le site génère automatiquement des messages WhatsApp pré-remplis:

**Pour un produit spécifique:**

```
Bonjour, je suis intéressé(e) par le parfum *[Nom du produit]*
au prix de [Prix] FCFA. Pouvez-vous me donner plus d'informations ?
```

**Pour contact général:**

```
Bonjour, je souhaiterais avoir des informations sur vos parfums
Senteur de Mami.
```

## 🎯 Optimisations SEO

- ✅ Structure sémantique HTML5
- ✅ Meta tags optimisés
- ✅ Headings hiérarchisés (H1, H2, H3)
- ✅ Images avec attributs alt (à configurer)
- ✅ URLs propres et navigation fluide
- ✅ Performance optimisée (lazy loading)

## 📊 Analytics

Le site est prêt pour l'intégration de Google Analytics.
Ajoutez votre ID de suivi dans `src/index.html`.

## 🔒 Sécurité

- ✅ Validation des formulaires
- ✅ Protection XSS (Angular intégré)
- ✅ HTTPS recommandé pour la production

## 🌐 Déploiement

### Options d'hébergement

- **Netlify** (Recommandé)
- **Vercel**
- **Firebase Hosting**
- **GitHub Pages**

### Build de production

```bash
ng build --configuration production
```

## 📞 Support & Contact

**Développeur**: Madu Tech

- 📱 Téléphone: +221 77 445 19 82
- 💬 WhatsApp: +221 76 823 08 03
- 📧 Email: gueye.medoune@mit.edu.sn

## 📝 Licence

© 2025 Senteur de Mami. Tous droits réservés.

## 🎉 Fonctionnalités Futures (Optionnelles)

- [ ] Système de paiement en ligne
- [ ] Espace client avec authentification
- [ ] Blog pour articles et actualités
- [ ] Multilingue (Français, Anglais, Wolof)
- [ ] Mode sombre
- [ ] Système de wishlist
- [ ] Notifications push
- [ ] Chat en direct (LiveChat)

---

**Développé avec ❤️ par Madu Tech**
