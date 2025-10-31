import React from 'react';
import "./header.css";

export const Header: React.FC = () => {
  return (
    <header className="animated-gradient relative text-white py-6 px-4 shadow-2xl overflow-hidden">
      {/* Overlay de desvanecido */}
      <div className="fade-bottom"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400" style={{
            textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)'
          }}>
            EXODOS
          </h1>
          <h2 className="text-sm md:text-base font-bold text-green-400 -mt-1" style={{
            textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)'
          }}>
            NIGHT CLUB
          </h2>
        </div>
        <p className="text-center text-green-300 text-sm md:text-base mt-2">
          Carta de Bebidas
        </p>
      </div>
    </header>
  );
};
