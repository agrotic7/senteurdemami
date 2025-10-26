import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  formData = signal({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  constructor(private productService: ProductService) {}

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.submitError.set(false);

    // Simuler l'envoi (dans un vrai projet, vous enverriez à un backend)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      
      // Réinitialiser le formulaire
      this.formData.set({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Masquer le message de succès après 5 secondes
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }, 1500);
  }

  isFormValid(): boolean {
    const data = this.formData();
    return !!(data.name && data.email && data.message);
  }

  openWhatsApp() {
    window.open(this.productService.getGeneralWhatsAppLink(), '_blank');
  }

  contactInfo = [
    {
      icon: '📱',
      title: 'Téléphone',
      value: '+221 77 445 19 82',
      link: 'tel:+221774451982'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+221 76 823 08 03',
      link: 'https://wa.me/221768230803'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@senteurdemami.sn',
      link: 'mailto:contact@senteurdemami.sn'
    },
    {
      icon: '📍',
      title: 'Adresse',
      value: 'Dakar, Sénégal',
      link: '#'
    }
  ];
}

