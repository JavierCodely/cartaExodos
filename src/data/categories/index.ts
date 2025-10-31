import { Drink } from '../../types/drink';
import { combosData } from './combos';
import { promocionesData } from './promociones';
import { aperitivosData } from './aperitivos';
import { sinAlcoholData } from './sin-alcohol';
import { vinosData } from './vinos';
import { vodkasData } from './vodkas';
import { whiskysData } from './whiskys';
import { cervezasData } from './cervezas';
import { ginData } from './gin';
import { champanData } from './champan';
import { combineWithIds, assignIds } from './utils';

// Exportar todas las bebidas con IDs automáticas
export const allDrinks: Drink[] = combineWithIds(
  combosData,
  promocionesData,
  aperitivosData,
  sinAlcoholData,
  vinosData,
  vodkasData,
  whiskysData,
  cervezasData,
  ginData,
  champanData
);

// Exportar categorías individuales con IDs
export const combos = assignIds(combosData, 1);
export const promociones = assignIds(promocionesData, combos.length + 1);
export const aperitivos = assignIds(aperitivosData, combos.length + promociones.length + 1);
export const sinAlcohol = assignIds(sinAlcoholData, combos.length + promociones.length + aperitivos.length + 1);
export const vinos = assignIds(vinosData, combos.length + promociones.length + aperitivos.length + sinAlcohol.length + 1);
export const vodkas = assignIds(vodkasData, combos.length + promociones.length + aperitivos.length + sinAlcohol.length + vinos.length + 1);
export const whiskys = assignIds(whiskysData, combos.length + promociones.length + aperitivos.length + sinAlcohol.length + vinos.length + vodkas.length + 1);
export const cervezas = assignIds(cervezasData, combos.length + promociones.length + aperitivos.length + sinAlcohol.length + vinos.length + vodkas.length + whiskys.length + 1);
export const gin = assignIds(ginData, combos.length + promociones.length + aperitivos.length + sinAlcohol.length + vinos.length + vodkas.length + whiskys.length + cervezas.length + 1);
export const champan = assignIds(champanData, combos.length + promociones.length + aperitivos.length + sinAlcohol.length + vinos.length + vodkas.length + whiskys.length + cervezas.length + gin.length + 1);
