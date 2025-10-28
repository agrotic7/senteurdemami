import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
  canonicalUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private router = inject(Router);

  private defaultSeo: SeoData = {
    title: 'Senteur de Mami - Parfums Traditionnels Africains | Gowé, Diguijé, Thiouraye',
    description: 'Découvrez les parfums traditionnels africains authentiques de Senteur de Mami. Gowé, Diguijé et Thiouraye 100% naturels. Livraison en France et en Europe.',
    keywords: 'parfum africain, senteur traditionnelle, gowé, diguijé, thiouraye, parfum naturel, encens africain, parfum maison, senteur de mami, parfum authentique, tradition africaine, parfum artisanal',
    author: 'Mami LAYE - Senteur de Mami',
    image: '/assets/logo.jpg',
    type: 'website'
  };

  constructor() {
    this.trackRouteChanges();
  }

  private trackRouteChanges() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Scroll to top on route change
      window.scrollTo(0, 0);
    });
  }

  updateMetaTags(seoData: Partial<SeoData>) {
    const data: SeoData = { ...this.defaultSeo, ...seoData };
    const baseUrl = 'https://senteurdemami.com'; // Remplacez par votre URL

    // Title
    this.titleService.setTitle(data.title);

    // Standard Meta Tags
    this.updateTag('description', data.description);
    this.updateTag('keywords', data.keywords || this.defaultSeo.keywords!);
    this.updateTag('author', data.author || this.defaultSeo.author!);
    this.updateTag('robots', 'index, follow');
    this.updateTag('language', 'French');
    this.updateTag('revisit-after', '7 days');
    
    // Canonical URL
    const canonicalUrl = data.canonicalUrl || `${baseUrl}${this.router.url}`;
    this.updateLinkTag('canonical', canonicalUrl);

    // Open Graph Tags (Facebook, LinkedIn)
    this.updateTag('og:title', data.title, 'property');
    this.updateTag('og:description', data.description, 'property');
    this.updateTag('og:type', data.type || 'website', 'property');
    this.updateTag('og:url', data.url || canonicalUrl, 'property');
    this.updateTag('og:image', `${baseUrl}${data.image || this.defaultSeo.image}`, 'property');
    this.updateTag('og:image:alt', data.title, 'property');
    this.updateTag('og:site_name', 'Senteur de Mami', 'property');
    this.updateTag('og:locale', 'fr_FR', 'property');

    // Twitter Card Tags
    this.updateTag('twitter:card', 'summary_large_image');
    this.updateTag('twitter:title', data.title);
    this.updateTag('twitter:description', data.description);
    this.updateTag('twitter:image', `${baseUrl}${data.image || this.defaultSeo.image}`);
    this.updateTag('twitter:image:alt', data.title);

    // Additional SEO Tags
    this.updateTag('theme-color', '#712f26'); // Burgundy color
    this.updateTag('msapplication-TileColor', '#712f26');
  }

  private updateTag(name: string, content: string, attr: string = 'name') {
    if (content) {
      if (this.meta.getTag(`${attr}="${name}"`)) {
        this.meta.updateTag({ [attr]: name, content });
      } else {
        this.meta.addTag({ [attr]: name, content });
      }
    }
  }

  private updateLinkTag(rel: string, href: string) {
    const selector = `link[rel="${rel}"]`;
    let link: HTMLLinkElement | null = document.querySelector(selector);
    
    if (link) {
      link.setAttribute('href', href);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    }
  }

  // Structured Data (Schema.org JSON-LD)
  addStructuredData(data: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  removeStructuredData() {
    const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }

  // Organization Schema
  addOrganizationSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Senteur de Mami",
      "description": "Parfums traditionnels africains authentiques - Gowé, Diguijé, Thiouraye",
      "url": "https://senteurdemami.com",
      "logo": "https://senteurdemami.com/assets/logo.jpg",
      "image": "https://senteurdemami.com/assets/banniere.jpg",
      "email": "senteursdemami@gmail.com",
      "telephone": "+33753547958",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montereau-Fault-Yonne",
        "addressCountry": "FR"
      },
      "sameAs": [
        "https://www.facebook.com/senteurdemami",
        "https://www.instagram.com/senteurdemami"
      ],
      "founder": {
        "@type": "Person",
        "name": "Mami LAYE"
      }
    };
    this.addStructuredData(schema);
  }

  // Product Schema
  addProductSchema(product: any) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "image": `https://senteurdemami.com/${product.image}`,
      "brand": {
        "@type": "Brand",
        "name": "Senteur de Mami"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://senteurdemami.com/products/${product.id}`,
        "priceCurrency": "XOF",
        "price": product.promotionPrice || product.price,
        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Senteur de Mami"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    };
    this.addStructuredData(schema);
  }

  // Breadcrumb Schema
  addBreadcrumbSchema(items: Array<{name: string, url: string}>) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://senteurdemami.com${item.url}`
      }))
    };
    this.addStructuredData(schema);
  }

  // FAQ Schema
  addFAQSchema(faqs: Array<{question: string, answer: string}>) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    this.addStructuredData(schema);
  }
}

