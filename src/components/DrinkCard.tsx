import React from 'react';
import { Star, Zap } from 'lucide-react';
import { Drink } from '../types/drink';

interface DrinkCardProps {
  drink: Drink;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'combos':
        return 'from-yellow-400 to-orange-500';
      case 'shots':
        return 'from-red-500 to-orange-600';
      case 'cervezas':
        return 'from-red-500 to-red-600';
      case 'vinos':
        return 'from-purple-500 to-violet-600';
      case 'vodkas':
        return 'from-blue-400 to-blue-500';
      case 'sin-alcohol':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-blue-500 to-cyan-600';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500">
      <div className={`h-2 bg-gradient-to-r ${getCategoryColor(drink.category)}`}></div>
      
      <div className="relative h-32 sm:h-48 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 flex gap-1">
          {drink.isPopular && (
            <div className="bg-yellow-500 text-black px-1 sm:px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span className="hidden sm:inline">Popular</span>
            </div>
          )}
          {drink.category === 'premium' && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-1 sm:px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Zap className="w-3 h-3 fill-current" />
              <span className="hidden sm:inline">Premium</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-3 sm:p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{drink.name}</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2 leading-relaxed">
              {drink.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center  display-block">
          <span className="text-lg sm:text-2xl font-bold  text-white drop-shadow-md display-block">
            ${drink.price}
          </span>
       
        </div>
      </div>
    </div>
  );
};