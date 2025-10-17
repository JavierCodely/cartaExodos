import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const vodkasData: DrinkWithoutId[] = [
  {
    name: 'ABSOLUTE VODKA',
    description: 'ABSOLUTE VODKA en botella',
    precioVenta: "65.000",
    category: 'Vodkas',
    image: '/img/img/ABSOLUTE.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'SERNOVA',
    description: 'SERNOVA en botella',
    precioVenta: "17.000",
    category: 'Vodkas',
    image: '/img/sernovaindivirul.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'SKYY VODKA',
    description: 'SKYY VODKA en botella',
    precioVenta: "20.000",
    category: 'Vodkas',
    image: '/img/vodka indiviual.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
