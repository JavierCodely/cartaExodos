import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Drink } from '../types/drink';
import { PaymentMethod, calculatePriceByPaymentMethod } from '../utils/priceCalculations';

interface DrinkCardProps {
  drink: Drink;
  paymentMethod: PaymentMethod;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ drink, paymentMethod }) => {
  const [isSelected, setIsSelected] = useState(false);

  // Calcular precio y descuento según el método de pago
  // El descuento se calcula automáticamente desde precio_transferencia a precio_efectivo
  const priceInfo = calculatePriceByPaymentMethod(
    drink.precio_efectivo,
    drink.precio_transferencia,
    paymentMethod
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Combos':
        return 'from-yellow-400 to-orange-500';
      case 'Promociones':
        return 'from-lime-400 to-green-500';
      case 'Aperitivos':
        return 'from-cyan-400 to-teal-500';
      case 'Cervezas':
        return 'from-red-500 to-red-600';
      case 'Vinos':
        return 'from-purple-500 to-violet-600';
      case 'Vodkas':
        return 'from-blue-400 to-blue-500';
      case 'Whiskys':
        return 'from-amber-500 to-yellow-600';
      case 'Gin':
        return 'from-cyan-400 to-teal-500';
      case 'Champan':
        return 'from-pink-400 to-rose-500';
      case 'Sin-alcohol':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-blue-500 to-cyan-600';
    }
  };

  const getCategoryNeonEffect = (category: string) => {
    switch (category) {
      case 'Combos':
        return {
          borderColor: 'rgb(251, 191, 36)',
          boxShadow: '0 0 20px rgba(251,191,36,0.6), 0 0 40px rgba(249,115,22,0.4)'
        };
      case 'Promociones':
        return {
          borderColor: 'rgb(163, 230, 53)',
          boxShadow: '0 0 20px rgba(163,230,53,0.8), 0 0 40px rgba(34,197,94,0.6)'
        };
      case 'Aperitivos':
        return {
          borderColor: 'rgb(34, 211, 238)',
          boxShadow: '0 0 20px rgba(34,211,238,0.6), 0 0 40px rgba(20,184,166,0.4)'
        };
      case 'Cervezas':
        return {
          borderColor: 'rgb(220, 38, 38)',
          boxShadow: '0 0 20px rgba(220,38,38,0.6), 0 0 40px rgba(220,38,38,0.4)'
        };
      case 'Vinos':
        return {
          borderColor: 'rgb(168, 85, 247)',
          boxShadow: '0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(139,92,246,0.4)'
        };
      case 'Vodkas':
        return {
          borderColor: 'rgb(96, 165, 250)',
          boxShadow: '0 0 20px rgba(96,165,250,0.6), 0 0 40px rgba(59,130,246,0.4)'
        };
      case 'Whiskys':
        return {
          borderColor: 'rgb(245, 158, 11)',
          boxShadow: '0 0 20px rgba(245,158,11,0.6), 0 0 40px rgba(234,179,8,0.4)'
        };
      case 'Gin':
        return {
          borderColor: 'rgb(34, 211, 238)',
          boxShadow: '0 0 20px rgba(34,211,238,0.6), 0 0 40px rgba(20,184,166,0.4)'
        };
      case 'Champan':
        return {
          borderColor: 'rgb(244, 114, 182)',
          boxShadow: '0 0 20px rgba(244,114,182,0.6), 0 0 40px rgba(251,113,133,0.4)'
        };
      case 'Sin-alcohol':
        return {
          borderColor: 'rgb(34, 197, 94)',
          boxShadow: '0 0 20px rgba(34,197,94,0.6), 0 0 40px rgba(16,185,129,0.4)'
        };
      default:
        return {
          borderColor: 'rgb(59, 130, 246)',
          boxShadow: '0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(14,165,233,0.4)'
        };
    }
  };

  const neonEffect = isSelected
    ? { borderColor: 'rgb(255, 255, 255)', boxShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5)' }
    : getCategoryNeonEffect(drink.category);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 neon-pulse cursor-pointer"
      style={{
        borderColor: neonEffect.borderColor,
        boxShadow: neonEffect.boxShadow
      }}
    >
      <div className={`h-2 bg-gradient-to-r ${getCategoryColor(drink.category)}`}></div>
      
      <div className="relative h-32 sm:h-48 overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          {drink.isPopular && (
            <div className="bg-yellow-500 text-black px-1 sm:px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              <span className="hidden sm:inline">Popular</span>
            </div>
          )}
          {priceInfo.discountPercentage && priceInfo.discountPercentage > 0 && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold" style={{
              textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6)'
            }}>
              {priceInfo.discountPercentage}% OFF
            </div>
          )}
        </div>
      </div>
      
      <div className="p-3 sm:p-5">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm sm:text-lg font-bold text-white mb-2 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
            {drink.name}
          </h3>
          <div className="flex flex-col items-center gap-0.5">
            {priceInfo.previousPrice && priceInfo.discountPercentage && priceInfo.discountPercentage > 0 && (
              <span className="text-sm sm:text-lg text-red-500 line-through font-semibold">
                ${priceInfo.previousPrice}
              </span>
            )}
            <span className="text-2xl sm:text-4xl font-bold text-white drop-shadow-md">
              ${priceInfo.currentPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};