import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const aperitivosData: DrinkWithoutId[] = [
  {
    name: 'VASO DE GIN TONIC',
    description: 'Vaso de gin tonic de 500cc',
    precioVenta: "7.000",
    precioAnterior: "8.000",
    porcentajeDescuento: 12.5,
    category: 'Aperitivos',
    image: '/img/VASI DE GIN.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'VASO DE FERNET',
    description: 'Vaso de fernet de 750cc',
    precioVenta: "6.000",
    precioAnterior: "8.000",
    porcentajeDescuento: 25,
    category: 'Aperitivos',
    image: '/img/VASODEFER.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
