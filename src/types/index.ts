export type Category =
  | 'Laptops'
  | 'Smartphones'
  | 'TVs'
  | 'Audio'
  | 'Gaming'
  | 'Fotografie';

export interface AiAdvice {
  score: number; // 1-10
  verdict: string;
  factors: string[];
}

export interface PriceEntry {
  storeId: string;
  price: number;
  inStock: boolean;
  shipping: number;
  url: string;
}

export interface PriceHistory {
  date: string;
  prices: Record<string, number>;
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  description: string;
  specs: Record<string, string>;
  aiAdvice: AiAdvice;
  prices: PriceEntry[];
  priceHistory: PriceHistory[];
}