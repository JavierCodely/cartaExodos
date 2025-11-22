import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const ginData: DrinkWithoutId[] = [
  // Agrega aquí tus productos de gin
  // Ejemplo:
  // {
  //   name: 'GIN TONIC',
  //   description: 'Gin tonic premium',
  //   price: "25.000",
  //   category: 'Gin',
  //   image: '/img/gin.png',
  //   isPopular: false,
  //   alcoholContent: '100%'
  // }
  {
    name: 'LLAVE',
    description: ' GIN LLAVE en botella',
    precioVenta: "10.000",
    precio_efectivo: "10.000",
    precio_transferencia: "11.000",
    category: 'Gin',
    image: '/img/img/GIN LLAVE.png',
    isPopular: false,
    alcoholContent: '100%'
  }
];
