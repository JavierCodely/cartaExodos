import { Drink } from '../../types/drink';

/**
 * Genera IDs automáticas para un array de bebidas
 * Las IDs se generan secuencialmente comenzando desde startId
 */
export function assignIds<T extends Omit<Drink, 'id'>>(
  items: T[],
  startId: number = 1
): Drink[] {
  return items.map((item, index) => ({
    ...item,
    id: String(startId + index)
  })) as Drink[];
}

/**
 * Combina múltiples arrays de bebidas y asigna IDs automáticas secuenciales
 */
export function combineWithIds(...arrays: Omit<Drink, 'id'>[][]): Drink[] {
  const combined: Drink[] = [];
  let currentId = 1;

  for (const array of arrays) {
    const withIds = assignIds(array, currentId);
    combined.push(...withIds);
    currentId += array.length;
  }

  return combined;
}
