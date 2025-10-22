import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const combosData: DrinkWithoutId[] = [
  
  {
    name: 'ABSOLUT VODKA + 4 SPEED',
    description: 'Combo de 1 absolute vodka y 4 speed.',
    precioVenta: "70.000",
    precioAnterior: "81.000",
    porcentajeDescuento: 13.5,
    category: 'Combos',
    image: '/img/img/comboabsolute4speed.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'JW RED LABEL + 4 SPEED',
    description: 'Combo de 1 red label y 4 speed.',
    precioVenta: "70.000",  
    precioAnterior: "76.000",
    porcentajeDescuento: 7.9,
    category: 'Combos',
    image: '/img/img/comboredlabel.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'X12 HEINEKEN PORRON',
    description: 'Combo de 12 heineken porron.',
    precioVenta: "55.000",
    precioAnterior: "60.000",
    porcentajeDescuento: 8.3,
    category: 'Combos',
    image: '/img/PRRONCOM.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'GIN TONIC + 3 AGUAS TONICAS',
    description: 'Combo de 1 gin tonic y 3 aguas tonicas.',
    precioAnterior: "31.000",
    porcentajeDescuento: 6.5,
    precioVenta: "29.000",
    category: 'Combos',
    image: '/img/img/combogin.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'SKY VODKA + 4 SPEED',
    description: 'Combo de 1 sky vodka y 4 speed.',
    precioVenta: "30.000",
    precioAnterior: "41.000",
    porcentajeDescuento: 26.8,
    category: 'Combos',
    image: '/img/img/combosky.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'SERNOVA + 4 SPEED',
    description: 'Combo de 1 sernova y 4 speed.',
    precioVenta: "25.000",
    precioAnterior: "33.000",
    porcentajeDescuento: 24.2,
    category: 'Combos',
    
    image: '/img/img/combosernova4.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'COSECHA TARDIA + 4 SPRITE',
    description: 'Combo de 1 cosecha tardia y 4 sprite.',
    precioVenta: "25.000",
    precioAnterior: "28.000",
    porcentajeDescuento: 10.7,
    category: 'Combos',
    image: '/img/img/combocosechatardia.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'CHANDON + 2 SPEED',
    description: 'Combo de 1 chandon y 2 speed.',
    precioVenta: "45.000",
    precioAnterior: "48.000",
    porcentajeDescuento: 6.3,
    category: 'Combos',
    image: '/img/chandon.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'NEW AGE+ 4 SPEED',
    description: 'Combo de 1 new age y 4 speed.',
    precioVenta: "25.000",
    precioAnterior: "30.000",
    porcentajeDescuento: 16.7,
    category: 'Combos',
    image: '/img/img/combonewage.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'M.M Extra Brut  + 2 SPEED',
    description: 'Combo de 1 m.m extra brut y 2 speed.',
    precioVenta: "29.000",
    precioAnterior: "33.000",
    porcentajeDescuento: 12.1,
    category: 'Combos',
    image: '/img/img/comboextrabrut.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
