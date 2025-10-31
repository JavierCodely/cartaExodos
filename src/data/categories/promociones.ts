import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const promocionesData: DrinkWithoutId[] = [
  {
    name: 'X 5 CORONA EN LATA',
    description: 'CORONA EN LATA',
    precioVenta: "12.500",
    precioAnterior: "18.000",
    porcentajeDescuento: 30.6,
    category: 'Promociones',
    image: '/img/img/corona.png',
    isPopular: true,
    alcoholContent: '100%'
  }
];
