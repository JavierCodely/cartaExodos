export interface Drink {
  id: string;
  name: string;
  description: string;
  precioVenta: string; // Deprecated: usar precio_efectivo
  precio_efectivo: string;
  precio_transferencia: string;
  precioAnterior?: string;
  porcentajeDescuento?: number;
  category: DrinkCategory;
  image: string;
  isPopular?: boolean;
  alcoholContent?: string;
}

export type DrinkCategory = 'Combos' | 'Promociones' | 'Aperitivos' | 'Cervezas' | 'Vinos' | 'Sin-alcohol' | 'Vodkas' | 'Whiskys' | 'Gin' | 'Champan';