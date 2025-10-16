import React from 'react';
import { Star } from 'lucide-react';
import { Drink } from '../types/drink';

interface DrinkCardProps {
  drink: Drink;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Combos':
        return 'from-yellow-400 to-orange-500';
      case 'Aperitivos':
        return 'from-red-500 to-orange-600';
      case 'Cervezas':
        return 'from-red-500 to-red-600';
      case 'Vinos':
        return 'from-purple-500 to-violet-600';
      case 'Vodkas':
        return 'from-blue-400 to-blue-500';
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
          border: 'border-yellow-400',
          shadow: 'shadow-[0_0_20px_rgba(251,191,36,0.6),0_0_40px_rgba(249,115,22,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.8),0_0_50px_rgba(249,115,22,0.6)]'
        };
      case 'Aperitivos':
        return {
          border: 'border-red-500',
          shadow: 'shadow-[0_0_20px_rgba(239,68,68,0.6),0_0_40px_rgba(249,115,22,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.8),0_0_50px_rgba(249,115,22,0.6)]'
        };
      case 'Cervezas':
        return {
          border: 'border-red-600',
          shadow: 'shadow-[0_0_20px_rgba(220,38,38,0.6),0_0_40px_rgba(220,38,38,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(220,38,38,0.8),0_0_50px_rgba(220,38,38,0.6)]'
        };
      case 'Vinos':
        return {
          border: 'border-purple-500',
          shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(139,92,246,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.8),0_0_50px_rgba(139,92,246,0.6)]'
        };
      case 'Vodkas':
        return {
          border: 'border-blue-400',
          shadow: 'shadow-[0_0_20px_rgba(96,165,250,0.6),0_0_40px_rgba(59,130,246,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.8),0_0_50px_rgba(59,130,246,0.6)]'
        };
      case 'Gin':
        return {
          border: 'border-cyan-400',
          shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(20,184,166,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.8),0_0_50px_rgba(20,184,166,0.6)]'
        };
      case 'Champan':
        return {
          border: 'border-pink-400',
          shadow: 'shadow-[0_0_20px_rgba(244,114,182,0.6),0_0_40px_rgba(251,113,133,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.8),0_0_50px_rgba(251,113,133,0.6)]'
        };
      case 'Sin-alcohol':
        return {
          border: 'border-green-500',
          shadow: 'shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(16,185,129,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.8),0_0_50px_rgba(16,185,129,0.6)]'
        };
      default:
        return {
          border: 'border-blue-500',
          shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(14,165,233,0.4)]',
          hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.8),0_0_50px_rgba(14,165,233,0.6)]'
        };
    }
  };

  const neonEffect = getCategoryNeonEffect(drink.category);

  return (
    <>
      <style>{`
        @keyframes neonPulse {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }
        .neon-pulse {
          animation: neonPulse 2s ease-in-out infinite;
        }
      `}</style>
      <div className={`bg-gray-800 rounded-lg sm:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 neon-pulse ${neonEffect.border} ${neonEffect.shadow} ${neonEffect.hoverShadow}`}>
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
        </div>
      </div>
      
      <div className="p-3 sm:p-5">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm sm:text-lg font-bold text-white mb-3 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
            {drink.name}
          </h3>
          <span className="text-lg sm:text-2xl font-bold text-white drop-shadow-md">
            ${drink.price}
          </span>
        </div>
      </div>
    </div>
    </>
  );
};