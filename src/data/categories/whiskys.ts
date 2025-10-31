import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const whiskysData: DrinkWithoutId[] = [
  
  {
    name: 'RED LABEL',
    description: 'RED LABEL en botella',
    precioVenta: "60.000",
    category: 'Whiskys',
    image: '/img/img/REDLABEL.png',
    isPopular: false,
    alcoholContent: '40%'
  },
  {
    name: 'Ballentines',
    description: 'Ballentines en botella',
    precioVenta: "70.000",
    category: 'Whiskys',
    image: '/img/img/ballentino.png',
    isPopular: false,
    alcoholContent: '40%'
  }
];
