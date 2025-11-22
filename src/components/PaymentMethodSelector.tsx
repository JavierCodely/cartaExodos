import React from 'react';
import { DollarSign, CreditCard } from 'lucide-react';
import { PaymentMethod } from '../utils/priceCalculations';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  onMethodChange
}) => {
  return (
    <div className="sticky top-[60px] z-50 bg-black/70 backdrop-blur-sm py-3 sm:py-4 mb-4 sm:mb-6 shadow-lg border-b-2 border-gray-800">
      <div className="flex justify-center items-center px-3 sm:px-4">
        <div className="flex bg-gray-900/50 rounded-lg sm:rounded-xl p-1 border-2 border-gray-700/50">
        <button
          onClick={() => onMethodChange('efectivo')}
          className={`
            flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg
            font-bold text-xs sm:text-base transition-all duration-300
            ${selectedMethod === 'efectivo'
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
            }
          `}
          style={selectedMethod === 'efectivo' ? {
            boxShadow: '0 0 15px rgba(34,197,94,0.6), 0 0 30px rgba(16,185,129,0.4)'
          } : {}}
        >
          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Efectivo</span>
        </button>

        <button
          onClick={() => onMethodChange('transferencia')}
          className={`
            flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md sm:rounded-lg
            font-bold text-xs sm:text-base transition-all duration-300
            ${selectedMethod === 'transferencia'
              ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
            }
          `}
          style={selectedMethod === 'transferencia' ? {
            boxShadow: '0 0 15px rgba(96,165,250,0.8), 0 0 30px rgba(59,130,246,0.6)'
          } : {}}
        >
          <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Transferencia</span>
        </button>
      </div>
      </div>
    </div>
  );
};
