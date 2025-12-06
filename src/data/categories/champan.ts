import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const champanData: DrinkWithoutId[] = [
  // Agrega aquí tus productos de champán
  // Ejemplo:
  // {
  //   name: 'CHANDON',
  //   description: 'Chandon brut',
  //   price: "35.000",
  //   category: 'Champan',
  //   image: '/img/chandon-solo.png',
  //   isPopular: false,
  //   alcoholContent: '100%'
  // }
  {
    name: 'CHANDON DELICE',
    description: 'CHANDON DELICE',
    precioVenta: "40.000",
    precio_efectivo: "40.000",
    precio_transferencia: "44.000",
    category: 'Champan',
    image: '/img/img/CHANDON.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'CHANDON DEMI SEC',
    description: 'CHANDON DEMI SEC',
    precioVenta: "40.000",
    precio_efectivo: "40.000",
    precio_transferencia: "40.000",
    category: 'Champan',
    image: '/img/img/demisecchandon.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'M.M Demi Sec',
    description: 'M.M Demi Sec',
    precioVenta: "20.000",
    precio_efectivo: "20.000",
    precio_transferencia: "22.000",
    category: 'Champan',
    image: '/img/img/demisec.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'M.M Extra Brut',
    description: 'M.M Extra Brut',
    precioVenta: "20.000",
    precio_efectivo: "20.000",
    precio_transferencia: "22.000",
    category: 'Champan',
    image: '/img/img/extrabrut.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
