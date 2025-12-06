import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const cervezasData: DrinkWithoutId[] = [

  {
    name: 'Porron',
    description: 'Porron en botella',
    precioVenta: "5.000",
    precio_efectivo: "5.000",
    precio_transferencia: "6.000",
    precioAnterior: "6.000",
    porcentajeDescuento: 16.6,
    category: 'Cervezas',
    image: '/img/proooorn.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'Corona 710CC',
    description: 'Corona en botella 710CC',
    precioVenta: "8.000",
    precio_efectivo: "10.000",
    precio_transferencia: "12.000",
    precioAnterior: "15.000",
    porcentajeDescuento: 20,
    category: 'Cervezas',
    image: '/img/corona botella.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'Imperial Gold',
    description: 'Imperial Gold en botella',
    precioVenta: "4.000",
    precio_efectivo: "5.000",
    precio_transferencia: "6.000",
    precioAnterior: "6.500",
    porcentajeDescuento: 20,
    category: 'Cervezas',
    image: '/img/img/imperial.png',
    isPopular: true,
    alcoholContent: '100%'
  }
];
