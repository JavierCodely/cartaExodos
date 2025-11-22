import React from 'react';
import { DrinkCard } from './DrinkCard';
import { Drink } from '../types/drink';
import { PaymentMethod } from '../utils/priceCalculations';

interface DrinkGridProps {
  drinks: Drink[];
  paymentMethod: PaymentMethod;
}

export const DrinkGrid: React.FC<DrinkGridProps> = ({ drinks, paymentMethod }) => {
  if (drinks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🍹</div>
        <p className="text-gray-400 text-lg mb-2">No encontramos bebidas</p>
        <p className="text-gray-500 text-sm">Intenta con otro filtro o búsqueda</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 max-w-7xl mx-auto">
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} paymentMethod={paymentMethod} />
      ))}
    </div>
  );
};