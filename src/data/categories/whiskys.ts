import { Drink } from '../../types/drink';

type DrinkWithoutId = Omit<Drink, 'id'>;

export const whiskysData: DrinkWithoutId[] = [];
