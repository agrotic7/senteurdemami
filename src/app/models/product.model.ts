export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPromotion?: boolean;
  promotionPrice?: number;
  inStock: boolean;
  gallery?: string[];
  characteristics?: {
    volume?: string;
    fragrance?: string;
    duration?: string;
    ingredients?: string[];
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

