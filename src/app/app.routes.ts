import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogArticleComponent } from './pages/blog-article/blog-article.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ReturnPolicyComponent } from './pages/return-policy/return-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil - Senteur de Mami', data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, title: 'À Propos - Senteur de Mami', data: { animation: 'AboutPage' } },
  { path: 'products', component: ProductsComponent, title: 'Nos Produits - Senteur de Mami', data: { animation: 'ProductsPage' } },
  { path: 'products/:id', component: ProductDetailComponent, title: 'Détail Produit - Senteur de Mami', data: { animation: 'ProductDetailPage' } },
  { path: 'testimonials', component: TestimonialsComponent, title: 'Témoignages - Senteur de Mami', data: { animation: 'TestimonialsPage' } },
  { path: 'contact', component: ContactComponent, title: 'Contact - Senteur de Mami', data: { animation: 'ContactPage' } },
  { path: 'faq', component: FaqComponent, title: 'FAQ - Questions Fréquentes - Senteur de Mami', data: { animation: 'FaqPage' } },
  { path: 'blog', component: BlogComponent, title: 'Blog - Conseils & Traditions - Senteur de Mami', data: { animation: 'BlogPage' } },
  { path: 'blog/:slug', component: BlogArticleComponent, title: 'Article - Senteur de Mami', data: { animation: 'ArticlePage' } },
  { path: 'legal-notice', component: LegalNoticeComponent, title: 'Mentions Légales - Senteur de Mami', data: { animation: 'LegalPage' } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Politique de Confidentialité - Senteur de Mami', data: { animation: 'PrivacyPage' } },
  { path: 'terms-conditions', component: TermsConditionsComponent, title: 'Conditions Générales - Senteur de Mami', data: { animation: 'TermsPage' } },
  { path: 'return-policy', component: ReturnPolicyComponent, title: 'Politique de Retour - Senteur de Mami', data: { animation: 'ReturnPage' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
