import { Drink } from '../types/drink';

export const drinks: Drink[] = [
  //Combos locos
  
  {
    id: '27',
    name: 'JW RED LABEL + 2 SPEED',
    description: 'Combo de 1 red label y 2 speed.',
    price: "75.000",
    category: 'Combos',
    image: '/img/1.png',
    isPopular: true,
    alcoholContent: '100%'
  },
    {
    id: '1',
    name: 'ABSOLUTE VODKA + 2 SPEED',
    description: 'Combo de 1 absolute vodka y 2 speed.',
    price: "75.000",
    category: 'Combos',
    image: '/img/absolutevdokda.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    id: '20',
    name: 'GIN TONIC + 3 AGUAS TONICAS',
    description: 'Combo de 1 gin tonic y 3 aguas tonicas.',
    price: "30.000",
    category: 'Combos',
    image: '/img/gintonik.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    id: '2',
    name: 'SMIRNOFF VODKA + 2 SPEED',
    description: 'Combo de 1 smirnoff y 2 speed.',
    price: "30.000",
    category: 'Combos',
    image: '/img/2.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  
  {
    id: '3',
    name: 'SKYY VODKA + 2 SPEED',
    description: 'Combo de 1 skyy vodka y 2 speed.',
    price: "30.000",
    category: 'Combos',
    image: '/img/3.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    id: '444444',
    name: 'SERNOVA + 2 SPEED',
    description: 'Combo de 1 sernova y 2 speed.',
    price: "30.000",
    category: 'Combos',
    image: '/img/4.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  {
    id: '19',
    name: 'CHANDON + 2 SPEED',
    description: 'Combo de 1 chandon y 2 speed.',
    price: "50.000",
    category: 'Combos',
    image: '/img/chandon.png',
    isPopular: true,
    alcoholContent: '100%'
  },
  
  {
    id: '21',
    name: 'COSECHA TARDIA + 2 SPRITE',
    description: 'Combo de 1 cosecha tardia y 2 sprite.',
    price: "25.000",
    category: 'Combos',
    image: '/img/cosecha tardia.png',
    isPopular: true,
    alcoholContent: '100%'
  },

 //VASOS 
 {
  id: '24',
  name: 'VASO DE GIN TONIC',
  description: 'Vaso de gin tonic de 500cc',
  price: "7.000",
  category: 'Aperitivos',
  image: '/img/VASI DE GIN.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '25',
  name: 'VASO DE FERNET',
  description: 'Vaso de fernet de 750cc',
  price: "8.000",
  category: 'Aperitivos',
  image: '/img/VASODEFER.png',
  isPopular: false,
  alcoholContent: '100%'
 },

  
//SIN ALCOHOL
 {
  id: '5',
  name: 'Agua Mineral',
  description: 'Agua mineral de lasmisiones manaos',
  price: "4.500",
  category: 'Sin-alcohol',
  image: '/img/las misiones.png',
  isPopular: false,
  alcoholContent: '0%'
 },
 {
  id: '6',
  name: 'Coca Cola',
  description: 'Coca Cola en lata',
  price: "5.000",
  category: 'Sin-alcohol',
  image: '/img/coca cola.png',
  isPopular: false,
  alcoholContent: '0%'
 },
 {
  id: '7',
  name: 'Sprite',
  description: 'Sprite en lata',
  price: "5.000",
  category: 'Sin-alcohol',
  image: '/img/spritee.png',
  isPopular: false,
  alcoholContent: '0%'
 }
 ,
 {
  id: '9',
  name: 'SPEED UNLIMITED',
  description: 'SPEED UNLIMITED ',
  price: "5.000",
  category: 'Sin-alcohol',
  image: '/img/speed.png',
  isPopular: true,
  alcoholContent: '0%'
 },
 {
  id: '8',
  name: 'Monster Energy',
  description: 'Monster Energy en lata',
  price: "6.000",
  category: 'Sin-alcohol',
  image: '/img/monster energy.png',
  isPopular: false,
  alcoholContent: '0%'
 },


 //VINOS
 {
  id: '10',
  name: 'Cosecha tardia',
  description: 'Cosecha tardia en botella',
  price: "17.000",
  category: 'Vinos',
  image: '/img/cosecha tardia UNICA.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '11',
  name: 'Prisionero vino',
  description: 'Prisionero en botella',
  price: "20.000",
  category: 'Vinos',
  image: '/img/prisionero vino.png',
  isPopular: false,
  alcoholContent: '100%'
 },


 //vodka
 {
  id: '12',
  name: 'SERNOVA',
  description: 'SERNOVA en botella',
  price: "17.000",
  category: 'Vodkas',
  image: '/img/sernovaindivirul.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '13',
  name: 'SMIRNOFF VODKA',
  description: 'SMIRNOFF VODKA en botella',
  price: "25.000",
  category: 'Vodkas',
  image: '/img/smirnoff.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '18',
  name: 'SKYY VODKA',
  description: 'SKYY VODKA en botella',
  price: "25.000",
  category: 'Vodkas',
  image: '/img/vodka indiviual.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 




 //cervezas
 {
  id: '14',
  name: 'SOL BOTELLA',
  description: 'SOL en botella',
  price: "6.000",
  category: 'Cervezas',
  image: '/img/sol botella222.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '15',
  name: 'Porron',
  description: 'Porron en botella',
  price: "5.000",
  category: 'Cervezas',
  image: '/img/proooorn.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '16',
  name: 'Stella Lata',
  description: 'Stella en lata',
  price: "5.000",
  category: 'Cervezas',
  image: '/img/sol.png',
  isPopular: false,
  alcoholContent: '100%'
 },
 {
  id: '17',
  name: 'Corona 710CC',
  description: 'Corona en botella 710CC',
  price: "11.000",
  category: 'Cervezas',
  image: '/img/corona botella.png',
  isPopular: false,
  alcoholContent: '100%'
 }
];