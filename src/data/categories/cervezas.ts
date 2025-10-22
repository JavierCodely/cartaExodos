import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const cervezasData: DrinkWithoutId[] = [
  
  {
    name: 'Porron',
    description: 'Porron en botella',
    precioVenta: "5.000",
    precioAnterior: "6.000",
    porcentajeDescuento: 16.6,
    category: 'Cervezas',
    image: '/img/proooorn.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'Heineken lata 473cc',
    description: 'Heineken en lata',
    precioVenta: "4.000",
    precioAnterior: "5.000",
    porcentajeDescuento: 20,
    category: 'Cervezas',
    image: '/img/img/heineken lata.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'Corona 710CC',
    description: 'Corona en botella 710CC',
    precioVenta: "8.000",
    precioAnterior: "10.000",
    porcentajeDescuento: 20,
    category: 'Cervezas',
    image: '/img/corona botella.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'Corona en Lata',
    description: 'Corona en lata',
    precioVenta: "3.000",
    precioAnterior: "5.000",
    porcentajeDescuento: 40,
    category: 'Cervezas',
    image: '/img/img/corona.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
