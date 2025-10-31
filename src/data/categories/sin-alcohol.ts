import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const sinAlcoholData: DrinkWithoutId[] = [
  {
    name: 'Agua Mineral',
    description: 'Agua mineral de lasmisiones manaos',
    precioVenta: "3.000",
    precioAnterior: "5.000",
    porcentajeDescuento: 40,
    category: 'Sin-alcohol',
    image: '/img/las misiones.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'Coca Cola',
    description: 'Coca Cola en lata',
    precioVenta: "5.000",
    category: 'Sin-alcohol',
    image: '/img/coca cola.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'Pindapoy',
    description: 'Pindapoy en lata',
    precioVenta: "2.500",
    precioAnterior: "4.000",
    porcentajeDescuento: 37.5,
    category: 'Sin-alcohol',
    image: '/img/img/pindapoy.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'Sprite',
    description: 'Sprite en lata',
    precioVenta: "3.500",
    precioAnterior: "5.000",
    porcentajeDescuento: 30,
    category: 'Sin-alcohol',
    image: '/img/spritee.png',
    isPopular: false,
    alcoholContent: '0%'
  },
  {
    name: 'SPEED UNLIMITED',
    description: 'SPEED UNLIMITED ',
    precioVenta: "4.000",
    precioAnterior: "5.000",
    porcentajeDescuento: 22.2,
    category: 'Sin-alcohol',
    image: '/img/speed.png',
    isPopular: true,
    alcoholContent: '0%'
  },
  {
    name: 'Monster Energy',
    description: 'Monster Energy en lata',
    precioVenta: "6.000",
    category: 'Sin-alcohol',
    image: '/img/monster energy.png',
    isPopular: false,
    alcoholContent: '0%'
  }
];
