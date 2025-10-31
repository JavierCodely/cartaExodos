import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const vodkasData: DrinkWithoutId[] = [
  {
    name: 'ABSOLUTE VODKA',
    description: 'ABSOLUTE VODKA en botella',
    precioVenta: "50.000",
    precioAnterior: "60.000",
    porcentajeDescuento: 16.7,
    category: 'Vodkas',
    image: '/img/img/ABSOLUTE.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'SERNOVA',
    description: 'SERNOVA en botella',
    precioVenta: "15.000",
    precioAnterior: "17.000",
    porcentajeDescuento: 11.8,
    category: 'Vodkas',
    image: '/img/sernovaindivirul.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'SKYY VODKA',
    description: 'SKYY VODKA en botella',
    precioVenta: "23.000",
    precioAnterior: "25.000",
    porcentajeDescuento: 8,
    category: 'Vodkas',
    image: '/img/vodka indiviual.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
