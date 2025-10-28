import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { SeoService } from '../../services/seo.service';
import { BlogArticle } from '../../models/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit, OnDestroy {
  articles = signal<BlogArticle[]>([]);
  featuredArticles = signal<BlogArticle[]>([]);

  constructor(
    private blogService: BlogService,
    private seoService: SeoService
  ) {
    this.articles.set(this.blogService.getArticles());
    this.featuredArticles.set(this.blogService.getFeaturedArticles());
  }

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Blog - Conseils et Traditions des Parfums Africains | Senteur de Mami',
      description: 'Découvrez nos articles sur les parfums traditionnels africains : histoire du Gowé, guide d\'utilisation du Diguijé et Thiouraye, conseils d\'experts et traditions ancestrales.',
      keywords: 'blog parfum africain, gowé histoire, diguijé guide, thiouraye utilisation, conseils parfums naturels, traditions africaines',
      canonicalUrl: 'https://senteurdemami.com/blog'
    });

    this.seoService.addBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog' }
    ]);
  }

  ngOnDestroy() {
    this.seoService.removeStructuredData();
  }
}

