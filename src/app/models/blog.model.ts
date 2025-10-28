export interface BlogArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedDate: string;
  readingTime: number;
  tags: string[];
  featured?: boolean;
}

export interface BlogCategory {
  id: string;
  name: string;
  count: number;
}

