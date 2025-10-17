import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const cervezasData: DrinkWithoutId[] = [
  
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
    name: 'Corona 710CC',
    description: 'Corona en botella 710CC',
    precioVenta: "11.000",
    category: 'Cervezas',
    image: '/img/corona botella.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
