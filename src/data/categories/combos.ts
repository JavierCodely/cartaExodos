import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const combosData: DrinkWithoutId[] = [
  
  {
    name: 'ABSOLUT VODKA + 4 SPEED',
    description: 'Combo de 1 absolute vodka y 4 speed.',
    precioVenta: "70.000",
    precioAnterior: "85.000",
    porcentajeDescuento: 17.6,
    category: 'Combos',
    image: '/img/img/comboabsolute4speed.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'JW RED LABEL + 4 SPEED',
    description: 'Combo de 1 red label y 4 speed.',
    precioVenta: "75.000",  
    precioAnterior: "80.000",
    porcentajeDescuento: 6.3,
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
    precioAnterior: "40.000",
    porcentajeDescuento: 12.5,
    precioVenta: "35.000",
    category: 'Combos',
    image: '/img/img/combogin.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'SKY VODKA + 4 SPEED',
    description: 'Combo de 1 sky vodka y 4 speed.',
    precioVenta: "30.000",
    precioAnterior: "40.000",
    porcentajeDescuento: 25,
    category: 'Combos',
    image: '/img/img/combosky.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'SERNOVA + 4 SPEED',
    description: 'Combo de 1 sernova y 4 speed.',
    precioVenta: "30.000",
    precioAnterior: "37.000",
    porcentajeDescuento: 18.9,
    category: 'Combos',
    
    image: '/img/img/combosernova4.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'COSECHA TARDIA + 4 SPRITE',
    description: 'Combo de 1 cosecha tardia y 4 sprite.',
    precioVenta: "25.000",
    precioAnterior: "35.000",
    porcentajeDescuento: 28.6,
    category: 'Combos',
    image: '/img/img/combocosechatardia.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'CHANDON + 2 SPEED',
    description: 'Combo de 1 chandon y 2 speed.',
    precioVenta: "45.000",
    precioAnterior: "50.000",
    porcentajeDescuento: 10,
    category: 'Combos',
    image: '/img/chandon.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'NEW AGE+ 4 SPEED',
    description: 'Combo de 1 new age y 4 speed.',
    precioVenta: "23.000",
    precioAnterior: "35.000",
    porcentajeDescuento: 34.3,
    category: 'Combos',
    image: '/img/img/combonewage.png',
    isPopular: false,
    alcoholContent: '100%'
  },
  {
    name: 'M.M Extra Brut  + 2 SPEED',
    description: 'Combo de 1 m.m extra brut y 2 speed.',
    precioVenta: "30.000",
    precioAnterior: "35.000",
    porcentajeDescuento: 14.3,
    category: 'Combos',
    image: '/img/img/comboextrabrut.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
