import React from 'react';
import "./header.css";

export const Header: React.FC = () => {
  return (
    <header className="animated-gradient relative text-white py-6 px-4 shadow-2xl overflow-hidden">
      {/* Overlay de desvanecido */}
      <div className="fade-bottom"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            EXODOS
          </h1>
        </div>
        <p className="text-center text-green-300 text-sm md:text-base">
          Carta de Bebidas
        </p>
      </div>
    </header>
  );
};
