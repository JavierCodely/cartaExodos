import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Clock className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium text-white">Horarios</p>
              <p className="text-sm">Sabado: 12 PM - 6 AM</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MapPin className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium text-white">Ubicación</p>
              <p className="text-sm">AVENIDA 9 DE JULIO (ENTRE JAMAICA Y CHILE)</p>
            </div>
          </div>
          
          {/*<div className="flex items-center justify-center md:justify-start space-x-2">
            <Phone className="w-5 h-5 text-blue-400" />
            <div>
              <p className="font-medium text-white">Reservas</p>
              <p className="text-sm">+54 3757 44343434</p>
            </div>
          </div>
          */}
        </div>  
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Exodos night club. Consumir con responsabilidad. +18 años.
          </p>
        </div>
      </div>
    </footer>
  );
};