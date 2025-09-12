import { Drink } from '../types/drink';

export const drinks: Drink[] = [
  //Combos locos
  {
    id: '1',
    name: 'JW RED LABEL + 2 SPEED',
    description: 'Combo de 1 red label y 2 speed.',
    price: "70.000",
    category: 'sin-alcohol',
    image: './img/1.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    id: '2',
    name: 'SMIRNOFF + 2 SPEED',
    description: 'Combo de 1 smirnoff y 2 speed.',
    price: "27.000",
    category: 'sin-alcohol',
    image: './img/2.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  //Sin Alcohol
  {
    id: '2',
    name: 'SPEED UNLIMITED',
    description: 'SPEED UNLIMITED ENERGY DRINK.',
    price: 12,
    category: 'sin-alcohol',
    image: './img/speed.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    id: '3',
    name: 'Agua Mineral',
    description: 'Agua mineral de lasmisiones manaos',
    price: 12,
    category: 'sin-alcohol',
    image: './img/las misiones.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    id: '3',
    name: 'Monster Energy',
    description: 'Monster Energy',
    price: 12,
    category: 'sin-alcohol',
    image: './img/monster energy.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    id: '4',
    name: 'Sprite',
    description: 'Sprite en lata',
    price: 12,
    category: 'sin-alcohol',
    image: './img/spritee.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    id: '5',
    name: 'Coca Cola en Lata',
    description: 'Coca cola en lata',
    price: 12,
    category: 'sin-alcohol',
    image: './img/coca cola.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  //Vinos
  {
    id: '6',
    name: 'Vino Tinto',
    description: 'Vino tinto',
    price: 12,
    category: 'vinos',
    image: './img/vino.png',
    isPopular: false,
    alcoholContent: '15%'
  }
  
 
];