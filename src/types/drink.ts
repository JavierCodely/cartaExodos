export interface Drink {
  id: string;
  name: string;
  description: string;
  price: string;
  category: DrinkCategory;
  image: string;
  isPopular?: boolean;
  alcoholContent?: string;
}

export type DrinkCategory = 'Combos' | 'Aperitivos' | 'Cervezas' | 'Vinos' | 'Sin-alcohol' | 'Vodkas' | 'Premium';