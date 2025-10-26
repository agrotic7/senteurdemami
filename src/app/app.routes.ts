import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil - Senteur de Mami' },
  { path: 'about', component: AboutComponent, title: 'À Propos - Senteur de Mami' },
  { path: 'products', component: ProductsComponent, title: 'Nos Produits - Senteur de Mami' },
  { path: 'products/:id', component: ProductDetailComponent, title: 'Détail Produit - Senteur de Mami' },
  { path: 'testimonials', component: TestimonialsComponent, title: 'Témoignages - Senteur de Mami' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Senteur de Mami' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
