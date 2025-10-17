import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const cervezasData: DrinkWithoutId[] = [
  {
    name: 'SOL BOTELLA',
    description: 'SOL en botella',
    precioVenta: "6.000",
    category: 'Cervezas',
    image: '/img/sol botella222.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  
  {
    name: 'Porron',
    description: 'Porron en botella',
    precioVenta: "5.000",
    category: 'Cervezas',
    image: '/img/proooorn.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'Heineken lata 473cc',
    description: 'Heineken en lata',
    precioVenta: "4.000",
    category: 'Cervezas',
    image: '/img/img/heineken lata.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'Stella Lata',
    description: 'Stella en lata',
    precioVenta: "5.000",
    category: 'Cervezas',
    image: '/img/sol.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'Corona 710CC',
    description: 'Corona en botella 710CC',
    precioVenta: "11.000",
    category: 'Cervezas',
    image: '/img/corona botella.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
