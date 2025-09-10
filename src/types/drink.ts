export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  category: DrinkCategory;
  image: string;
  isPopular?: boolean;
  alcoholContent?: string;
}

export type DrinkCategory = 'cocteles' | 'shots' | 'cervezas' | 'vinos' | 'sin-alcohol' | 'premium';