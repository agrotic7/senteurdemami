import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-contact-page',
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
      value: '+33 7 53 54 79 58',
      link: 'tel:+33753547958'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+33 7 53 54 79 58',
      link: 'https://wa.me/33753547958'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'senteursdemami@gmail.com',
      link: 'mailto:senteursdemami@gmail.com'
    },
    {
      icon: '📍',
      title: 'Adresse',
      value: 'Montereau-Fault-Yonne, France',
      link: '#'
    }
  ];
}

