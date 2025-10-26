# 🚀 Guide de Déploiement - Senteur de Mami

Ce guide détaille les étapes pour déployer le site Senteur de Mami sur différentes plateformes d'hébergement.

## 📋 Prérequis

Avant de déployer, assurez-vous que:

- ✅ Le projet build sans erreur (`ng build`)
- ✅ Tous les tests passent (`ng test`)
- ✅ Les numéros WhatsApp sont corrects
- ✅ Les informations de contact sont à jour

## 🔨 Build de Production

```bash
# Build optimisé pour la production
ng build --configuration production

# Ou avec npm
npm run build
```

Les fichiers seront générés dans `dist/senteurdemami/browser/`

## 🌐 Déploiement sur Netlify (Recommandé)

### Méthode 1: Via l'interface web

1. **Créer un compte** sur [netlify.com](https://netlify.com)

2. **Nouveau site**:

   - Cliquez sur "Add new site" > "Deploy manually"
   - Glissez-déposez le dossier `dist/senteurdemami/browser`

3. **Configuration**:
   - Le site sera déployé instantanément
   - Configurez un nom de domaine personnalisé si nécessaire

### Méthode 2: Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod
```

### Configuration netlify.toml

Créez un fichier `netlify.toml` à la racine:

```toml
[build]
  command = "ng build --configuration production"
  publish = "dist/senteurdemami/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔷 Déploiement sur Vercel

### Via l'interface web

1. Visitez [vercel.com](https://vercel.com)
2. Importez votre projet GitHub
3. Vercel détectera automatiquement Angular
4. Configurez:
   - Framework: Angular
   - Build Command: `ng build`
   - Output Directory: `dist/senteurdemami/browser`

### Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel --prod
```

### Configuration vercel.json

```json
{
  "buildCommand": "ng build --configuration production",
  "outputDirectory": "dist/senteurdemami/browser",
  "framework": "angular",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🔥 Déploiement sur Firebase Hosting

### Installation

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialiser Firebase
firebase init hosting
```

### Configuration lors de l'init:

- Public directory: `dist/senteurdemami/browser`
- Configure as single-page app: **Yes**
- Set up automatic builds: **No**
- Overwrite index.html: **No**

### Fichier firebase.json

```json
{
  "hosting": {
    "public": "dist/senteurdemami/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Déployer

```bash
# Build
ng build --configuration production

# Déployer
firebase deploy --only hosting
```

## 📘 Déploiement sur GitHub Pages

### Via Angular CLI

```bash
# Installer le package
npm install -g angular-cli-ghpages

# Build et déployer
ng build --configuration production --base-href "https://[USERNAME].github.io/[REPO]/"
npx angular-cli-ghpages --dir=dist/senteurdemami/browser
```

### Configuration GitHub Actions

Créez `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build -- --base-href="/[REPO]/"

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/senteurdemami/browser
```

## 🌍 Configuration du Domaine Personnalisé

### Pour tous les hébergeurs:

1. **Acheter un domaine** (ex: senteurdemami.sn)

2. **Configurer les DNS**:

   ```
   Type: A
   Name: @
   Value: [IP de l'hébergeur]

   Type: CNAME
   Name: www
   Value: [domaine-netlify].netlify.app
   ```

3. **Activer HTTPS** (automatique sur Netlify/Vercel)

## 🔐 Configuration SSL/HTTPS

Tous les hébergeurs mentionnés offrent SSL gratuit via Let's Encrypt:

- **Netlify**: Automatique
- **Vercel**: Automatique
- **Firebase**: Automatique
- **GitHub Pages**: Automatique (avec domaine custom)

## 📊 Configuration Analytics

### Google Analytics

Ajoutez dans `src/index.html` avant `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## ⚡ Optimisations Post-Déploiement

### 1. Vérifier les performances

```bash
# Lighthouse (Chrome DevTools)
# ou
npx lighthouse https://votre-site.com
```

### 2. Configurer le cache

Ajoutez des headers dans `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

### 3. Activer la compression

La plupart des hébergeurs activent Gzip/Brotli automatiquement.

## 🔍 Vérifications Post-Déploiement

- [ ] Le site charge correctement
- [ ] Toutes les images s'affichent
- [ ] Les liens de navigation fonctionnent
- [ ] Les boutons WhatsApp redirigent correctement
- [ ] Le formulaire de contact fonctionne
- [ ] Le site est responsive (mobile, tablette, desktop)
- [ ] Les animations fonctionnent
- [ ] Le slider hero fonctionne
- [ ] SSL/HTTPS est actif
- [ ] Pas d'erreurs dans la console

## 🐛 Dépannage

### Erreur 404 sur les routes

Ajoutez une règle de redirection pour SPA:

```
/*  /index.html  200
```

### Styles Tailwind manquants

Vérifiez que `tailwind.config.js` est bien configuré.

### Images ne chargent pas

Vérifiez les chemins dans `assets/` et que les fichiers sont inclus dans le build.

## 📞 Support

Pour toute aide au déploiement:

- **Madu Tech**: +221 77 445 19 82
- **WhatsApp**: +221 76 823 08 03
- **Email**: gueye.medoune@mit.edu.sn

---

**Bon déploiement! 🚀**
