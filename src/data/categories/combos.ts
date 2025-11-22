import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const combosData: DrinkWithoutId[] = [

  {
    name: 'JACK DANIELS + 4 MONSTER',
    description: 'Combo de 1 jack daniels y 4 monster.',
    precioVenta: "75.000",
    precio_efectivo: "75.000",
    precio_transferencia: "81.000",
    precioAnterior: "85.000",
    porcentajeDescuento: 6.3,
    category: 'Combos',
    image: '/img/combojack.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'BLACK LABEL + 4 MONSTER',
    description: 'Combo de 1 black label y 4 monster.',
    precioVenta: "75.000",
    precio_efectivo: "75.000",
    precio_transferencia: "81.000",
    precioAnterior: "85.000",
    porcentajeDescuento: 6.3,
    category: 'Combos',
    image: '/img/comboblack.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'ABSOLUT VODKA + 4 SPEED',
    description: 'Combo de 1 absolute vodka y 4 speed.',
    precioVenta: "60.000",
    precio_efectivo: "60.000",
    precio_transferencia: "65.000",
    precioAnterior: "66.000",
    porcentajeDescuento: 9.1,
    category: 'Combos',
    image: '/img/img/comboabsolute4speed.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'RED LABEL + 4 SPEED',
    description: 'Combo de 1 red label y 4 speed.',
    precioVenta: "70.000",
    precio_efectivo: "70.000",
    precio_transferencia: "71.000",
    precioAnterior: "76.000",
    porcentajeDescuento: 7.9,
    category: 'Combos',
    image: '/img/img/comboredlabel.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'X10 HEINEKEN PORRON',
    description: 'Combo de 12 heineken porron.',
    precioVenta: "40.000",
    precio_efectivo: "40.000",
    precio_transferencia: "43.500",
    precioAnterior: "50.000",
    porcentajeDescuento: 8,
    category: 'Combos',
    image: '/img/PRRONCOM.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'SKYY + 4 SPEED',
    description: 'Combo de 1 sky vodka y 4 speed.',
    precioVenta: "30.000",
    precio_efectivo: "30.000",
    precio_transferencia: "32.500",
    precioAnterior: "40.000",
    porcentajeDescuento: 25,
    category: 'Combos',
    image: '/img/img/combosky.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'SMIRNOFF + 4 SPEED',
    description: 'Combo de 1 smirnoff y 4 speed.',
    precioVenta: "30.000",
    precio_efectivo: "30.000",
    precio_transferencia: "32.500",
    precioAnterior: "40.000",
    porcentajeDescuento: 25,
    category: 'Combos',
    image: '/img/combosmir.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'SERNOVA + 4 SPEED',
    description: 'Combo de 1 sernova y 4 speed.',
    precioVenta: "25.000",
    precio_efectivo: "25.000",
    precio_transferencia: "27.000",
    precioAnterior: "31.000",
    porcentajeDescuento: 19.4,
    category: 'Combos',

    image: '/img/img/combosernova4.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'COSECHA TARDIA + 4 SPRITE',
    description: 'Combo de 1 cosecha tardia y 4 sprite.',
    precioVenta: "20.000",
    precio_efectivo: "20.000",
    precio_transferencia: "22.000",
    precioAnterior: "28.000",
    porcentajeDescuento: 10.7,
    category: 'Combos',
    image: '/img/img/combocosechatardia.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'CHANDON + 2 SPEED',
    description: 'Combo de 1 chandon y 2 speed.',
    precioVenta: "45.000",
    precio_efectivo: "45.000",
    precio_transferencia: "43.000",
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
    precioVenta: "20.000",
    precio_efectivo: "20.000",
    precio_transferencia: "22.000",
    precioAnterior: "30.000",
    porcentajeDescuento: 16.7,
    category: 'Combos',
    image: '/img/img/combonewage.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    name: 'M.M Extra Brut  + 2 SPEED',
    description: 'Combo de 1 m.m extra brut y 2 speed.',
    precioVenta: "35.000",
    precio_efectivo: "35.000",
    precio_transferencia: "38.000",
    precioAnterior: "50.000",
    porcentajeDescuento: 10.7,
    category: 'Combos',
    image: '/img/img/comboextrabrut.png',
    isPopular: false,
    alcoholContent: '100%'
  },

  {
    name: 'GIN TONIC + 3 AGUAS TONICAS',
    description: 'Combo de 1 gin tonic y 3 aguas tonicas.',
    precioVenta: "15.000",
    precio_efectivo: "15.000",
    precio_transferencia: "16.500",
    precioAnterior: "20.000",
    porcentajeDescuento: 20,
    category: 'Combos',
    image: '/img/combogin3.png',
    isPopular: true,
    alcoholContent: '100%'
  },
];
