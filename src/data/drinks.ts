import { Drink } from '../types/drink';

export const drinks: Drink[] = [
  // Cocteles
  {
    id: '1',
    name: 'Mojito Clásico',
    description: 'Ron blanco, menta fresca, lima, azúcar y soda',
    price: 12,
    category: 'cocteles',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400',
    isPopular: true,
    alcoholContent: '15%'
  },
  {
    id: '2',
    name: 'Cosmopolitan',
    description: 'Vodka, triple sec, jugo de arándano y lima',
    price: 14,
    category: 'cocteles',
    image: 'https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '18%'
  },
  {
    id: '3',
    name: 'Margarita',
    description: 'Tequila, cointreau, jugo de lima fresca',
    price: 13,
    category: 'cocteles',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400',
    isPopular: true,
    alcoholContent: '20%'
  },
  {
    id: '4',
    name: 'Long Island Iced Tea',
    description: 'Vodka, ron, gin, tequila, triple sec, cola',
    price: 16,
    category: 'cocteles',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '25%'
  },
  {
    id: '5',
    name: 'Piña Colada',
    description: 'Ron blanco, crema de coco, jugo de piña',
    price: 15,
    category: 'cocteles',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '16%'
  },
  
  // Shots
  {
    id: '6',
    name: 'Tequila Shot',
    description: 'Tequila premium con sal y lima',
    price: 8,
    category: 'shots',
    image: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=400',
    isPopular: true,
    alcoholContent: '40%'
  },
  {
    id: '7',
    name: 'Jägermeister',
    description: 'Licor de hierbas alemán helado',
    price: 9,
    category: 'shots',
    image: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '35%'
  },
  {
    id: '8',
    name: 'B52',
    description: 'Kahlúa, Bailey\'s y Grand Marnier en capas',
    price: 12,
    category: 'shots',
    image: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '25%'
  },
  {
    id: '9',
    name: 'Vodka Shot',
    description: 'Vodka premium helado',
    price: 7,
    category: 'shots',
    image: 'https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '40%'
  },

  // Cervezas
  {
    id: '10',
    name: 'Corona Extra',
    description: 'Cerveza mexicana ligera con lima',
    price: 6,
    category: 'cervezas',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
    isPopular: true,
    alcoholContent: '4.6%'
  },
  {
    id: '11',
    name: 'Heineken',
    description: 'Cerveza holandesa premium',
    price: 7,
    category: 'cervezas',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '5%'
  },
  {
    id: '12',
    name: 'Stella Artois',
    description: 'Cerveza belga suave y refrescante',
    price: 8,
    category: 'cervezas',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '5.2%'
  },
  {
    id: '13',
    name: 'Budweiser',
    description: 'Cerveza americana clásica',
    price: 5,
    category: 'cervezas',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '5%'
  },

  // Vinos
  {
    id: '14',
    name: 'Prosecco',
    description: 'Espumoso italiano refrescante',
    price: 10,
    category: 'vinos',
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400',
    isPopular: true,
    alcoholContent: '11%'
  },
  {
    id: '15',
    name: 'Sangría Roja',
    description: 'Vino tinto con frutas frescas',
    price: 11,
    category: 'vinos',
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '10%'
  },
  {
    id: '16',
    name: 'Champagne Brut',
    description: 'Espumoso francés premium',
    price: 18,
    category: 'vinos',
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '12%'
  },

  // Premium
  {
    id: '17',
    name: 'Don Julio 1942',
    description: 'Tequila añejo ultra premium',
    price: 35,
    category: 'premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '40%'
  },
  {
    id: '18',
    name: 'Macallan 18',
    description: 'Whisky escocés single malt 18 años',
    price: 45,
    category: 'premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '43%'
  },
  {
    id: '19',
    name: 'Grey Goose Martini',
    description: 'Vodka premium francés con aceitunas',
    price: 22,
    category: 'premium',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=400',
    alcoholContent: '35%'
  },

  // Sin Alcohol
  {
    id: '20',
    name: 'Virgin Mojito',
    description: 'Menta fresca, lima, azúcar y soda',
    price: 8,
    category: 'sin-alcohol',
    image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '21',
    name: 'Jugo Tropical',
    description: 'Mezcla de piña, mango y maracuyá',
    price: 6,
    category: 'sin-alcohol',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
    isPopular: true
  },
  {
    id: '23',
    name: 'Viaje de la felicidad',
    description: 'Flores',
    price: 0,
    category: 'sin-alcohol',
    image: './img/istockphoto-1367538455-612x612.jpg'
  }
];