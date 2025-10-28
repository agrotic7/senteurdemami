import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';
import { SeoService } from '../../services/seo.service';
import { BlogArticle } from '../../models/blog.model';

@Component({
  selector: 'app-blog-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-article.component.html',
  styles: []
})
export class BlogArticleComponent implements OnInit, OnDestroy {
  article = signal<BlogArticle | undefined>(undefined);
  sanitizedContent = signal<SafeHtml>('');
  relatedArticles = signal<BlogArticle[]>([]);

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private seoService: SeoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const foundArticle = this.blogService.getArticleBySlug(slug);
      
      if (foundArticle) {
        this.article.set(foundArticle);
        this.sanitizedContent.set(this.sanitizer.bypassSecurityTrustHtml(foundArticle.content));

        // SEO
        this.seoService.updateMetaTags({
          title: `${foundArticle.title} | Blog Senteur de Mami`,
          description: foundArticle.excerpt,
          keywords: foundArticle.tags.join(', '),
          image: foundArticle.image,
          type: 'article',
          canonicalUrl: `https://senteurdemami.com/blog/${foundArticle.slug}`
        });

        // Article Schema
        this.seoService.addStructuredData({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": foundArticle.title,
          "description": foundArticle.excerpt,
          "image": `https://senteurdemami.com${foundArticle.image}`,
          "author": {
            "@type": "Person",
            "name": foundArticle.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Senteur de Mami",
            "logo": {
              "@type": "ImageObject",
              "url": "https://senteurdemami.com/assets/logo.jpg"
            }
          },
          "datePublished": foundArticle.publishedDate,
          "dateModified": foundArticle.publishedDate
        });

        // Breadcrumb
        this.seoService.addBreadcrumbSchema([
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: foundArticle.title, url: `/blog/${foundArticle.slug}` }
        ]);

        // Get related articles
        const allArticles = this.blogService.getArticles();
        this.relatedArticles.set(
          allArticles.filter(a => a.id !== foundArticle.id).slice(0, 3)
        );
      }
    });
  }

  ngOnDestroy() {
    this.seoService.removeStructuredData();
  }
}

