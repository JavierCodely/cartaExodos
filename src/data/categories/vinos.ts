import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const vinosData: DrinkWithoutId[] = [
  //{
    //name: 'Prisionero vino',
    //description: 'Prisionero en botella',
    //precioVenta: "20.000",
    //category: 'Vinos',
    //image: '/img/prisionero vino.png',
    //isPopular: false,
    //alcoholContent: '100%'
  //}
  {
    name: 'Cosecha Tardia',
    description: 'Cosecha Tardia en botella',
    precioAnterior: "18.000",
    porcentajeDescuento: 33.3,
    precioVenta: "12.000",
    category: 'Vinos',
    image: '/img/img/cosechatardia.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'Estancia Mendoza',
    description: 'Estancia Mendoza en botella',
    precioVenta: "15.000",
    category: 'Vinos',
    image: '/img/img/estanciamendozablanco.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'NEW AGE',
    description: 'NEW AGE en botella',
    precioVenta: "14.000",
    precioAnterior: "15.000",
    porcentajeDescuento: 6.7,
    category: 'Vinos',
    image: '/img/img/newage.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
