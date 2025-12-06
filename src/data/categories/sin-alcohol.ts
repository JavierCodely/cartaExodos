import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const sinAlcoholData: DrinkWithoutId[] = [
  {
    name: 'Agua Mineral',
    description: 'Agua mineral de lasmisiones manaos',
    precioVenta: "3.000",
    precio_efectivo: "3.000",
    precio_transferencia: "4.000",
    category: 'Sin-alcohol',
    image: '/img/las misiones.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'Coca Cola',
    description: 'Coca Cola en lata',
    precioVenta: "5.000",
    precio_efectivo: "4.000",
    precio_transferencia: "5000",
    category: 'Sin-alcohol',
    image: '/img/coca cola.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'Sprite',
    description: 'Sprite en lata',
    precioVenta: "3.500",
    precio_efectivo: "4000",
    precio_transferencia: "5.000",
    category: 'Sin-alcohol',
    image: '/img/spritee.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'SPEED UNLIMITED',
    description: 'SPEED UNLIMITED ',
    precioVenta: "4.000",
    precio_efectivo: "4.000",
    precio_transferencia: "5.000",
    category: 'Sin-alcohol',
    image: '/img/speed.png',
    isPopular: true,
    alcoholContent: '0%'
  },
  {
    name: 'Monster Energy',
    description: 'Monster Energy en lata',
    precioVenta: "5.000",
    precio_efectivo: "6.000",
    precio_transferencia: "7.000",
    category: 'Sin-alcohol',
    image: '/img/monster energy.png',
    isPopular: false,
    alcoholContent: '0%'
  }
];
