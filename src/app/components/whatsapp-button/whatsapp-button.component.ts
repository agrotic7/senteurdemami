import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-whatsapp-button',
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styles: []
})
export class WhatsappButtonComponent {
  constructor(private productService: ProductService) {}

  openWhatsApp() {
    window.open(this.productService.getGeneralWhatsAppLink(), '_blank');
  }
}

