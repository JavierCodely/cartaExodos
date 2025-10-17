import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const promocionesData: DrinkWithoutId[] = [
  {
    name: 'X 5 CORONA EN LATA',
    description: 'CORONA EN LATA',
    precioVenta: "18.000",
    precioAnterior: "25.000",
    porcentajeDescuento: 28,
    category: 'Promociones',
    image: '/img/img/corona.png',
    isPopular: true,
    alcoholContent: '100%'
  }
];
