import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const aperitivosData: DrinkWithoutId[] = [
  {
    name: 'VASO DE GIN TONIC',
    description: 'Vaso de gin tonic de 500cc',
    precioVenta: "3.000",
    precio_efectivo: "4.000",
    precio_transferencia: "5000",
    category: 'Aperitivos',
    image: '/img/VASI DE GIN.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'VASO DE FERNET',
    description: 'Vaso de fernet de 750cc',
    precioVenta: "7.000",
    precio_efectivo: "7.000",
    precio_transferencia: "8.000",
    category: 'Aperitivos',
    image: '/img/VASODEFER.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
